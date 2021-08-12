import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tab } from './Tab';

test('renders a tab', () => {
	render(
		<Tab selected={false} id='one' name='numberOne' deletable={false} />
	);
	const tab = screen.getByRole('tab');
	expect(tab).not.toBeNull();
});

test('renders a named tab', () => {
	render(
		<Tab selected={false} id='one' name='numberOne' deletable={false} />
	);
	const tab = screen.getAllByText('numberOne');
	expect(tab).not.toBeNull();
});

test('renders a selected tab', () => {
	render(<Tab selected={true} id='one' name='numberOne' deletable={false} />);
	const tab = screen.getByRole('tab');
	expect(tab).toHaveAttribute('aria-selected');
});
test('renders a not selected tab', () => {
	render(
		<Tab selected={false} id='one' name='notselected' deletable={false} />
	);
	const tab = screen.getByRole('tab');
	expect(tab).toHaveAttribute('tabindex');
});
test('renders a deletable tab', () => {
	render(<Tab selected={false} id='one' name='deletable' deletable={true} />);
	const tab = screen.getByRole('tab');
	expect(tab).toHaveAttribute('data-deletable');
});
