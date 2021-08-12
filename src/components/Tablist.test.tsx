import React from 'react';
import { render, screen } from '@testing-library/react';
import TabsList from './TabsList';

test('renders a tablist', () => {
	render(<TabsList />);
	const tablist = screen.getByRole('tablist');
	expect(tablist).not.toBeNull();
});
