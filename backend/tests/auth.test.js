// auth.test.js
import { describe, it, expect } from '@jest/globals';
import { login, register } from '../services/authService';

describe('Auth Tests', () => {
    it('should log in a user with valid credentials', async () => {
        const userData = { email: 'test@example.com', password: 'password123' };
        const response = await login(userData);
        expect(response).toHaveProperty('token');
    });

    it('should register a new user successfully', async () => {
        const newUser = { email: 'newuser@example.com', password: 'securePass' };
        const response = await register(newUser);
        expect(response).toHaveProperty('id');
        expect(response.email).toBe(newUser.email);
    });
});
