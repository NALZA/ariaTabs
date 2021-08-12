import React from 'react';
import { render, screen } from '@testing-library/react';
import TabPanel from './TabPanel';

test('renders a tabpanel', () => {
	render(<TabPanel name='One' selected={true} text='aaaa' />);
	const tabpanel = screen.getByRole('tabpanel');
	expect(tabpanel).not.toBeNull();
});

test('renders text in a tabPanel', () => {
	render(<TabPanel name='One' selected={true} text='this is panel one' />);
	const tabpanel = screen.getByRole('tabpanel');
	expect(tabpanel).toHaveTextContent('this is panel one');
});

test('renders a selected panel', () => {
	render(<TabPanel name='One' selected={true} text='' />);
	const tabpanel = screen.getByRole('tabpanel');
	expect(tabpanel).not.toHaveAttribute('hidden');
});
test('renders a hidden panel', () => {
	render(<TabPanel name='One' selected={false} text='' />);
	expect(screen.queryByRole('tabpanel')).toBeNull();
});
