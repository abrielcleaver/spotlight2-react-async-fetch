import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message for DogsList', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/welcome to the dogsList/i);
  expect(welcomeMessage).toBeInTheDocument();
});
