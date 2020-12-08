import { screen } from '@testing-library/react';
import renderWithRouter from '../components/renderWithRouter';
import App from '../App';

test('renders Home page', () => {
  renderWithRouter(<App />);
  const linkElement = screen.getByTestId("profile-pic");
  expect(linkElement).toBeInTheDocument();
});
