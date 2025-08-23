import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('should render children correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole('button', { name: /Click Me/i })).toBeInTheDocument();
  });

  it('should apply default styles', () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-primary');
    expect(button).toHaveClass('px-4', 'py-3'); // Default theme
  });

  it('should apply primary color class', () => {
    render(<Button color="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-primary');
  });

  it('should apply secondary color class', () => {
    render(<Button color="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-secondary');
  });

  it('should apply small theme class', () => {
    render(<Button theme="small">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-4', 'py-2');
  });

  it('should apply big theme class', () => {
    render(<Button theme="big">Big</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-8', 'py-4');
  });

  it('should apply custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });
});
