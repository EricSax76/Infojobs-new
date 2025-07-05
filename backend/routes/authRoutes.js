// authRoutes.js
import express from 'express';

const router = express.Router();

// Ruta para el inicio de sesión
router.post('/login', (_req, _res) => {
    // Lógica de autenticación
});

// Ruta para el registro de usuarios
router.post('/register', (_req, _res) => {
    // Lógica de registro
});

// Ruta para el cierre de sesión
router.post('/logout', (_req, _res) => {
    // Lógica de cierre de sesión
});

export default router;
