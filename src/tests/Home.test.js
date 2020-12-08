import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../components/renderWithRouter';
import Home from '../pages/Home';

describe('Home page test', () => {
  it("should render profile picture and author's name", () => {
    renderWithRouter(<Home header/>);

    const profilePic = screen.getByTestId('profile-pic');
    expect(profilePic).toBeInTheDocument();
    expect(profilePic.src).toBe('http://localhost/profile-pic.jpeg');
    expect(profilePic.alt).toBe("Author's profile picture")

    const profileName = screen.getByText('Bruno Nogueira');
    expect(profileName).toBeInTheDocument();
  })

  it("should render About page when clicking author's name", () => {
    const { history } = renderWithRouter(<Home header/>);

    const profileName = screen.getByText('Bruno Nogueira');
    fireEvent.click(profileName);
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about');
  })

  it('should render NavBar component', () => {
    renderWithRouter(<Home section/>);
    
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toBeInTheDocument();
  })
});
