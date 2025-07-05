import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

describe('Dashboard Component', () => {
    test('renders the Dashboard component', () => {
        render(<Dashboard />);
        const dashboardElement = screen.getByTestId('dashboard');
        expect(dashboardElement).toBeInTheDocument();
    });

    test('displays user information', () => {
        render(<Dashboard user={{ name: 'John Doe', role: 'Admin' }} />);
        const userNameElement = screen.getByText(/John Doe/i);
        const userRoleElement = screen.getByText(/Admin/i);
        expect(userNameElement).toBeInTheDocument();
        expect(userRoleElement).toBeInTheDocument();
    });

    test('renders a list of items', () => {
        const items = ['Item 1', 'Item 2', 'Item 3'];
        render(<Dashboard items={items} />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems.length).toBe(items.length);
    });

    test('contains an action button', () => {
        render(<Dashboard />);
        const buttonElement = screen.getByRole('button', { name: /action/i });
        expect(buttonElement).toBeInTheDocument();
    });
});
