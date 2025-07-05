// candidateModel.js
import dbClient from './dbClient.js';

export const getAllCandidates = async () => {
    const query = 'SELECT * FROM candidates';
    const result = await dbClient.query(query);
    return result.rows;
};

export const getCandidateById = async (id) => {
    const query = 'SELECT * FROM candidates WHERE id = $1';
    const result = await dbClient.query(query, [id]);
    return result.rows[0];
};

export const createCandidate = async (candidate) => {
    const { name, resume, skills } = candidate;
    const query = `
        INSERT INTO candidates (id, user_id, cv_data, key_indicators, created_at)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;
    const result = await dbClient.query(query, [name, resume, skills]);
    return result.rows[0];
};
