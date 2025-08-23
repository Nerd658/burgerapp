import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroTop from './heroTop';

// Mock the Header component as it's not the focus of this test
vi.mock('./Header.jsx', () => ({
  default: () => <header>Mocked Header</header>,
}));

describe('HeroTop Component', () => {
  const defaultProps = {
    mainTitle: 'Welcome to Burger Town',
    burgerName: 'Mega',
    houseName: 'Burger',
    tagline: 'The best burgers!',
    buttonText: 'Order Now',
    price: '9.99€',
    priceText: 'only',
    imageSrc: '/fake-image.png',
  };

  it('should render all text content from props', () => {
    render(<HeroTop {...defaultProps} />);

    expect(screen.getByText(defaultProps.mainTitle)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.burgerName)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.houseName)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.tagline)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: defaultProps.buttonText })).toBeInTheDocument();
    expect(screen.getByText(`${defaultProps.price} ${defaultProps.priceText}`)).toBeInTheDocument();
  });

  it('should render the image with correct src and alt text', () => {
    render(<HeroTop {...defaultProps} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', defaultProps.imageSrc);
    expect(image).toHaveAttribute('alt', 'burger'); // Alt text is hardcoded
  });

  it('should render the mocked header', () => {
    render(<HeroTop {...defaultProps} />);
    expect(screen.getByText('Mocked Header')).toBeInTheDocument();
  });
});
