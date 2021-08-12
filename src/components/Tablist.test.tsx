import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders a tablist', async () => {
	const tablist = await screen.getAllByRole('tablist');
	expect(tablist).toBeInTheDocument();
});
