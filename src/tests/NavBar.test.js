import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../components/renderWithRouter';
import NavBar from '../components/NavBar';

describe('NavBar component test', () => {
  it('should render Contact page when clicking Contact Button', () => {
    const { history } = renderWithRouter(<NavBar />);

    const contactBtn = screen.getByText(/contato/i);
    expect(contactBtn).toBeInTheDocument();
    fireEvent.click(contactBtn);
    const pathname = history.location.pathname;
    expect(pathname).toBe('/contact');
  })

  it('should render Projects page when clicking Projects Button', () => {
    const { history } = renderWithRouter(<NavBar />);

    const projectsBtn = screen.getByText(/projetos/i);
    expect(projectsBtn).toBeInTheDocument();
    fireEvent.click(projectsBtn);
    const pathname = history.location.pathname;
    expect(pathname).toBe('/projects');
  })
});
