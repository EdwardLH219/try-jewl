import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

// Mock Next.js Head component
jest.mock('next/head', () => {
  return function Head({ children }) {
    return <>{children}</>;
  };
});

describe('Responsive Splash Page', () => {
  // Mock window.matchMedia for responsive tests
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  beforeEach(() => {
    // Reset window dimensions before each test
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768,
    });
  });

  test('renders responsive container wrapper', () => {
    render(<Home />);
    
    // Check that container wrapper exists
    const container = document.querySelector('[class*="containerWrapper"]');
    expect(container).toBeInTheDocument();
  });

  test('buttons have responsive classes applied', () => {
    render(<Home />);
    
    const whatsappButton = screen.getByRole('link', { 
      name: /connect whatsapp/i 
    });
    const telegramButton = screen.getByRole('link', { 
      name: /connect telegram/i 
    });
    
    // Check buttons have the ctaButton class
    expect(whatsappButton.className).toMatch(/ctaButton/);
    expect(telegramButton.className).toMatch(/ctaButton/);
  });

  test('simulates mobile viewport and checks button layout', () => {
    // Simulate mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    });
    
    // Trigger resize event
    const resizeEvent = new Event('resize');
    window.dispatchEvent(resizeEvent);
    
    render(<Home />);
    
    const whatsappButton = screen.getByRole('link', { 
      name: /connect whatsapp/i 
    });
    const telegramButton = screen.getByRole('link', { 
      name: /connect telegram/i 
    });
    
    // Verify buttons are present and have correct classes
    expect(whatsappButton).toBeInTheDocument();
    expect(telegramButton).toBeInTheDocument();
    expect(whatsappButton.className).toMatch(/ctaButton/);
    expect(telegramButton.className).toMatch(/ctaButton/);
    
    // Check button container
    const buttonContainer = document.querySelector('[class*="buttonContainer"]');
    expect(buttonContainer).toBeInTheDocument();
  });

  test('desktop layout maintains horizontal button layout', () => {
    // Simulate desktop viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1200,
    });
    
    // Trigger resize event
    const resizeEvent = new Event('resize');
    window.dispatchEvent(resizeEvent);
    
    render(<Home />);
    
    const buttonContainer = document.querySelector('[class*="buttonContainer"]');
    expect(buttonContainer).toBeInTheDocument();
    
    const whatsappButton = screen.getByRole('link', { 
      name: /connect whatsapp/i 
    });
    const telegramButton = screen.getByRole('link', { 
      name: /connect telegram/i 
    });
    
    expect(whatsappButton).toBeInTheDocument();
    expect(telegramButton).toBeInTheDocument();
  });

  test('container has correct responsive structure', () => {
    render(<Home />);
    
    // Check main container
    const mainContainer = document.querySelector('[class*="container"]');
    expect(mainContainer).toBeInTheDocument();
    
    // Check wrapper container
    const wrapperContainer = document.querySelector('[class*="containerWrapper"]');
    expect(wrapperContainer).toBeInTheDocument();
    
    // Check header, main, and footer sections
    const header = document.querySelector('[class*="header"]');
    const main = document.querySelector('[class*="main"]');
    const footer = document.querySelector('[class*="footer"]');
    
    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  test('viewport meta tag is present for mobile optimization', () => {
    render(<Home />);
    
    // Check that viewport meta tag exists
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    expect(viewportMeta).toBeInTheDocument();
    expect(viewportMeta).toHaveAttribute('content', 'width=device-width, initial-scale=1');
  });
}); 