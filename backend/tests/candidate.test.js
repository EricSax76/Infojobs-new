// candidate.test.js
import { describe, it, expect } from 'jest';
import { createCandidate, getCandidates } from '../services/candidateService';

describe('Candidate Tests', () => {
    it('should create a new candidate profile', async () => {
        const candidateData = { name: 'John Doe', email: 'john.doe@example.com', skills: ['JavaScript', 'Node.js'] };
        const response = await createCandidate(candidateData);
        expect(response).toHaveProperty('id');
        expect(response.name).toBe(candidateData.name);
    });

    it('should retrieve a list of candidates', async () => {
        const response = await getCandidates();
        expect(response).toBeInstanceOf(Array);
    });
});
