import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../../components/Navbar';

describe('Navbar Component', () => {
    test('renders the Navbar component', () => {
        render(<Navbar />);
        const navbarElement = screen.getByRole('navigation');
        expect(navbarElement).toBeInTheDocument();
    });

    test('contains a logo', () => {
        render(<Navbar />);
        const logoElement = screen.getByAltText(/logo/i);
        expect(logoElement).toBeInTheDocument();
    });

    test('renders menu items', () => {
        render(<Navbar />);
        const menuItems = screen.getAllByRole('listitem');
        expect(menuItems.length).toBeGreaterThan(0);
    });

    test('links navigate to correct pages', () => {
        render(<Navbar />);
        const homeLink = screen.getByText(/home/i);
        // eslint-disable-next-line testing-library/no-node-access
        expect(homeLink.closest('a')).toHaveAttribute('href', '/home');
    });
});
