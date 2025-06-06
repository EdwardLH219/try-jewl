/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

// Mock Next.js Head component
jest.mock('next/head', () => {
  return function Head({ children }) {
    return <>{children}</>;
  };
});

describe('Accessibility Tests', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('both buttons have aria-label attributes', () => {
    const whatsappButton = screen.getByRole('button', { name: /connect whatsapp/i });
    const telegramButton = screen.getByRole('button', { name: /connect telegram/i });
    
    expect(whatsappButton).toHaveAttribute('aria-label', 'Connect WhatsApp');
    expect(telegramButton).toHaveAttribute('aria-label', 'Connect Telegram');
  });

  test('buttons are accessible by aria-label', () => {
    const whatsappButton = screen.getByLabelText('Connect WhatsApp');
    const telegramButton = screen.getByLabelText('Connect Telegram');
    
    expect(whatsappButton).toBeInTheDocument();
    expect(telegramButton).toBeInTheDocument();
  });

  test('button container has proper role attribute', () => {
    const buttonContainer = screen.getByRole('group');
    expect(buttonContainer).toBeInTheDocument();
    expect(buttonContainer).toContainElement(screen.getByLabelText('Connect WhatsApp'));
    expect(buttonContainer).toContainElement(screen.getByLabelText('Connect Telegram'));
  });

  test('no duplicate id attributes present', () => {
    const { container } = render(<Home />);
    const elementsWithIds = container.querySelectorAll('[id]');
    const ids = Array.from(elementsWithIds).map(el => el.id);
    const uniqueIds = [...new Set(ids)];
    
    expect(ids.length).toBe(uniqueIds.length);
  });

  test('semantic header hierarchy is correct', () => {
    const h1 = screen.getByRole('heading', { level: 1 });
    const h2 = screen.getByRole('heading', { level: 2 });
    
    expect(h1).toHaveTextContent('We find a needle in a haystack');
    expect(h2).toHaveTextContent('Start now!');
    
    // Ensure H1 comes before H2 in DOM order
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toBe(h1);
    expect(headings[1]).toBe(h2);
  });
}); 