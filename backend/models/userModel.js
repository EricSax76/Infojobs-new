import dbClient from './dbClient.js';

// Obtener todos los usuarios
export const getAllUsers = async () => {
    const query = 'SELECT id, name, email, role, created_at FROM users';
    const result = await dbClient.query(query);
    return result.rows;
};

// Obtener un usuario por ID
export const getUserById = async (id) => {
    const query = 'SELECT id, name, email, role, created_at FROM users WHERE id = $1';
    const result = await dbClient.query(query, [id]);
    return result.rows[0];
};

// Crear un nuevo usuario
export const createUser = async (user) => {
    const { id, name, email, password_hash, role } = user; // Asegúrate de usar los campos correctos
    const query = `
        INSERT INTO users (id, name, email, password_hash, role)
        VALUES ($1, $2, $3, $4)
        RETURNING name, email, role, created_at;
    `;
    const result = await dbClient.query(query, [name, email, password_hash, role]);
    return result.rows[0];
};
