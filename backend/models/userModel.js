// userModel.js
import dbClient from './dbClient.js';

export const createUser = async ({ name, email, password, role = 'candidate' }) => {
  // En producción, hashea la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = `
    INSERT INTO users (name, email, password_hash, role)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [name, email, hashedPassword, role];
  const result = await dbClient.query(query, values);
  return result.rows[0];
};