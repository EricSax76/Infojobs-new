// offer.test.js
import { describe, it, expect } from 'jest';
import { createOffer, getOffers } from '../services/offerService';

describe('Offer Tests', () => {
    it('should create a new job offer', async () => {
        const offerData = { title: 'Frontend Developer', description: 'React experience required', company: 'Tech Co.' };
        const response = await createOffer(offerData);
        expect(response).toHaveProperty('id');
        expect(response.title).toBe(offerData.title);
    });

    it('should retrieve a list of job offers', async () => {
        const response = await getOffers();
        expect(response).toBeInstanceOf(Array);
    });
});
