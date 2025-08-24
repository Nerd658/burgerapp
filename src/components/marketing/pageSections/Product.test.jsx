import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Product from './Product';

describe('Product Component', () => {
  it('should render titles and headings from props', () => {
    const props = {
      title: 'Test Title',
      heading1: 'Test Heading 1',
      heading2: 'Test Heading 2',
    };

    render(<Product {...props} />);

    // HeadingTitle renders a heading role
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();

    // The other headings are also present
    expect(screen.getByText(props.heading1)).toBeInTheDocument();
    expect(screen.getByText(props.heading2)).toBeInTheDocument();
  });

  it('should render nothing if no props are provided', () => {
    const { container } = render(<Product />);

    // The container for HeadingTitle and Heading components will be there, but they will be empty
    const headings = container.querySelectorAll('h2, h3');
    headings.forEach(heading => {
      expect(heading.textContent).toBe('');
    });
  });
});
