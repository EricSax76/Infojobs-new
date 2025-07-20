import express from 'express';
import cors from 'cors';
import { connectToDatabase } from '../database/connection.js';
import jobOffersRoutes from '../routes/offerRoutes.js';
import userRoutes from './routes/users.js'; // O ajusta la ruta si estás en otra carpeta
app.use('/api/users', userRoutes);
import candidateRoutes from "../routes/candidateRoutes.js";
import companyRoutes from "../routes/companyRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express(); // Inicializa `app` primero
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
(async () => {
  try {
    await connectToDatabase();
    console.log('Conexión exitosa a la base de datos');
    
    // Rutas
    app.use('/api/job_offers', jobOffersRoutes);
    app.use("/api/candidates", candidateRoutes);
    app.use("/api/companies", companyRoutes); 

    // Ruta raíz
    app.get('/', (_req, res) => {
      res.send('Backend funcionando correctamente');
    });

    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1); // Salir del proceso si falla la conexión
  }
})();
