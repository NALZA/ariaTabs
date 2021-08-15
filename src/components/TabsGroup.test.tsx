import React from 'react';
import { render, screen } from '@testing-library/react';
import TabsGroup from './TabsGroup';
import userEvent from '@testing-library/user-event';
const tabs = [
	{
		name: 'one',
		text: 'one Text',
		deletable: true,
	},
	{
		name: 'two',
		text: 'two Textaa',
		deletable: true,
	},
];

test('renders a tabsGroup with roll tablist', () => {
	render(<TabsGroup tabs={tabs} />);
	const tablist = screen.getByRole('tablist');
	expect(tablist).not.toBeNull();
});

test('renders a tabsGroup with tabs and panels', () => {
	render(<TabsGroup tabs={tabs} />);
	const tablist = screen.getByRole('tablist');
	const tab = screen.getAllByRole('tab');
	const tabpanel = screen.getByRole('tabpanel');

	expect(tablist).not.toBeNull();
	expect(tab).not.toBeNull();
	expect(tabpanel).not.toBeNull();
});

test('renders a tabsGroup with one selected', () => {
	render(<TabsGroup tabs={tabs} />);
	const tablist = screen.getByRole('tablist');
	const tab = screen.getAllByRole('tab');
	const tabpanel = screen.queryAllByRole('tabpanel');
	expect(tablist).not.toBeNull();
	expect(tab.length).toEqual(2);
	expect(tabpanel.length).toEqual(1);
});

test('Checks text is correct', () => {
	render(<TabsGroup tabs={tabs} />);
	const one = screen.getByText('one');
	const two = screen.getByText('two Textaa');
	expect(one).not.toBeNull();
	expect(two).not.toBeNull();
});

const tabs2 = [
	{
		name: 'one',
		text: 'one Text',
		deletable: false,
	},
	{
		name: 'two',
		text: 'two Textaa',
		deletable: false,
	},
	{
		name: 'three',
		text: 'three Textaa',
		deletable: false,
	},
];
const tabs3 = [
	{
		name: 'one',
		text: 'one Text',
		deletable: true,
	},
	{
		name: 'two',
		text: 'two Textaa',
		deletable: true,
	},
	{
		name: 'three',
		text: 'three Textaa',
		deletable: true,
	},
];

test('Moves focus on end key press', () => {
	render(<TabsGroup tabs={tabs2} />);
	const tab = screen.getByRole('tab', { selected: true });
	userEvent.type(tab, '{end}');
	const end = screen.getByText('three');
	expect(end).toHaveAttribute('aria-selected', 'true');
	expect(end).toHaveFocus();
});

test('Moves focus on homekey press', () => {
	render(<TabsGroup tabs={tabs2} />);
	const tab = screen.getByRole('tab', { selected: true });
	userEvent.type(tab, '{end}');
	userEvent.type(tab, '{home}');

	const home = screen.getByText('one');
	expect(home).toHaveAttribute('aria-selected', 'true');
	expect(home).toHaveFocus();
});

test('Moves focus on left', () => {
	render(<TabsGroup tabs={tabs2} />);
	const tab = screen.getByRole('tab', { selected: true });
	expect(screen.getByText('one')).toHaveAttribute('aria-selected', 'true');
	userEvent.type(tab, '{arrowleft}');
	expect(screen.getByText('three')).toHaveFocus();
});
test('Moves focus on right', () => {
	render(<TabsGroup tabs={tabs2} />);
	const three = screen.getByText('three');
	userEvent.type(three, '{end}');
	expect(screen.getByText('three')).toHaveFocus();
	userEvent.type(three, '{arrowright}');
	expect(screen.getByText('one')).toHaveFocus();
});

test('Does not Deletes a tab', () => {
	render(<TabsGroup tabs={tabs2} />);
	const tab = screen.getByText('three');
	expect(screen.getAllByRole('tab')).toHaveLength(3);
	userEvent.type(tab, '{del}');
	expect(screen.getAllByRole('tab')).toHaveLength(3);
});

test('Deletes a tab', () => {
	render(<TabsGroup tabs={tabs3} />);
	const tab = screen.getByRole('tab', { selected: true });
	expect(screen.getAllByRole('tab')).toHaveLength(3);
	userEvent.type(tab, '{del}');
	expect(screen.getAllByRole('tab')).toHaveLength(2);
});
