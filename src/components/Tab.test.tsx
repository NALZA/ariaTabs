import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tab } from './Tab';
window.HTMLElement.prototype.scrollIntoView = jest.fn();

test('renders a tab', () => {
	render(
		<Tab
			datakey={1}
			selected={false}
			name='numberOne'
			deletable={false}
			onFocus={() => {}}
		/>
	);
	const tab = screen.getByRole('tab');
	expect(tab).not.toBeNull();
});

test('renders a named tab', () => {
	render(
		<Tab
			selected={false}
			name='numberOne'
			deletable={false}
			datakey={1}
			onFocus={() => {}}
		/>
	);
	const tab = screen.getAllByText('numberOne');
	expect(tab).not.toBeNull();
});

test('renders a selected tab', () => {
	render(
		<Tab
			selected={true}
			name='numberOne'
			deletable={false}
			datakey={1}
			onFocus={() => {}}
		/>
	);
	const tab = screen.getByRole('tab');
	expect(tab).toHaveAttribute('aria-selected');
});
test('renders a not selected tab', () => {
	render(
		<Tab
			selected={false}
			name='notselected'
			deletable={false}
			datakey={1}
			onFocus={() => {}}
		/>
	);
	const tab = screen.getByRole('tab');
	expect(tab).toHaveAttribute('tabindex');
});
test('renders a deletable tab', () => {
	render(
		<Tab
			selected={false}
			name='deletable'
			deletable={true}
			datakey={1}
			onFocus={() => {}}
		/>
	);
	const tab = screen.getByRole('tab');
	expect(tab).toHaveAttribute('data-deletable');
});
