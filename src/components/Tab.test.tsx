import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders a tablist', () => {
	const tab = screen.getByRole('tab');
	expect(tab).not.toBeNull();
});
