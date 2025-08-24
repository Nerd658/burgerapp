import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Heading Component', () => {
  it('should render children correctly', () => {
    const testMessage = 'Hello, World!';
    render(<Heading>{testMessage}</Heading>);

    const headingElement = screen.getByText(testMessage);
    expect(headingElement).toBeInTheDocument();
  });

  it('should render an h2 tag by default', () => {
    render(<Heading>Default Heading</Heading>);
    const headingElement = screen.getByRole('heading', { level: 2 });
    expect(headingElement).toBeInTheDocument();
  });

  it('should render an h3 tag when variant is h3', () => {
    render(<Heading variant="h3">H3 Heading</Heading>);
    const headingElement = screen.getByRole('heading', { level: 3 });
    expect(headingElement).toBeInTheDocument();
  });

  it('should apply correct classes for theme and display', () => {
    render(<Heading theme="secondary" display="gray">Styled Heading</Heading>);
    const headingElement = screen.getByText('Styled Heading');
    expect(headingElement).toHaveClass('font-bold');
    expect(headingElement).toHaveClass('text-gray-500');
  });
});
