import React from 'react';
import { render, within } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('renders header text', () => {
    const { getByText } = render(<Header />);
    const headerText = getByText('React TODO List');
    expect(headerText).toBeInTheDocument();
  });

  test('has dark background', () => {
    const { container } = render(<Header />);
    const navbar = container.querySelector('.navbar-dark');
    expect(navbar).toBeInTheDocument();
  });
  
  

  // Add more test cases as needed
});
