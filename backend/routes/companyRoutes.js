import express from 'express';
import pool from '../database/connection.js'; // usa el pool directamente

const router = express.Router();

router.post('/', async (req, res) => {
  const { nombre, cif, sector, tamano, email, password } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO companies (nombre, cif, sector, tamano, email, password)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, nombre, email`,
      [nombre, cif, sector, tamano, email, password]
    );

    console.log("Empresa registrada:", result.rows[0]);

    res.status(201).json({
      message: 'Empresa registrada correctamente',
      empresa: result.rows[0]
    });
  } catch (error) {
    console.error('Error al registrar la empresa:', error);
    res.status(500).json({ error: 'Error al registrar la empresa' });
  }
});

router.get('/', async (_req, res) => {
    try {
      const result = await pool.query('SELECT * FROM companies');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error al obtener empresas:', error);
      res.status(500).json({ error: 'Error al obtener empresas' });
    }
  });

export default router;
