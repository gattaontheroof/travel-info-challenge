import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../src/components/Navbar';

describe('Navbar component', () => {
  test('renders Navbar with navigation links and LocationSearch', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Assert navigation links are rendered and have correct URLs
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute('href')).toBe('/');

    const myLocationsLink = screen.getByText('My Locations');
    expect(myLocationsLink).toBeInTheDocument();
    expect(myLocationsLink.getAttribute('href')).toBe('/FavouriteLocations');

  });
});