import { render, screen } from '@testing-library/react';
//import App from './App';
//import { Router } from 'react-router-dom';


test('renders learn react link', () => {
  render("Welcome");
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

