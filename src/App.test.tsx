import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
window.HTMLElement.prototype.scrollIntoView = jest.fn();

test('renders without crashing', () => {
	render(<App />);
});
