import express from 'express';
import { createJobOffer } from '../models/jobOffersModel.js';

const router = express.Router();

// Endpoint para crear una oferta de trabajo
router.post('/', async (req, res) => {
    const newJobOffer = req.body; // Obtenemos los datos desde el cliente
    try {
        const createdOffer = await createJobOffer(newJobOffer);
        res.status(201).json(createdOffer); // Devolvemos la oferta creada
    } catch (error) {
        console.error('Error al crear la oferta de trabajo:', error);
        res.status(500).json({ error: 'Error al crear la oferta de trabajo' });
    }
});

export default router;
