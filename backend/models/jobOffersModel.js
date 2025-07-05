// jobOfferModel.js
import dbClient from './dbClient.js';

export const getAllJobOffers = async () => {
    const query = `
        SELECT id, title, description, user_id, location, salary_min, salary_max, education, job_type, created_at
        FROM job_offers
        ORDER BY id DESC;
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
    `;
    const result = await dbClient.query(query);
    return result.rows;
};


export const getJobOfferById = async (id) => {
    const query = 'SELECT * FROM job_offers WHERE id = $1';
    const result = await dbClient.query(query, [id]);
    return result.rows[0];
};

export const createJobOffer = async (jobOffer) => {
    const { title, description, user_id, location, salary_min, education, job_type } = jobOffer;
    const query = `
        SELECT id, title, description, user_id, location, salary_min, salary_max, education, job_type, created_at
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
    `;
    const values = [title, description, user_id, location, salary_min, education, job_type];
    const result = await dbClient.query(query, values);
    return result.rows[0];
};

