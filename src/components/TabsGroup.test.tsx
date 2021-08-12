import React from 'react';
import { render, screen } from '@testing-library/react';
import TabsGroup from './TabsGroup';

test('renders a tabsGroup with no', () => {
	render(<TabsGroup />);
	const tablist = screen.getByRole('tablist');
	expect(tablist).not.toBeNull();
});
