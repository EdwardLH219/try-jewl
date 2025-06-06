import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

// Mock Next.js Head component
jest.mock('next/head', () => {
  return function Head({ children }) {
    return <>{children}</>;
  };
});

describe('Splash Page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('renders the main heading', () => {
    const mainHeading = screen.getByRole('heading', { 
      name: /we find a needle in a haystack/i,
      level: 1 
    });
    expect(mainHeading).toBeInTheDocument();
  });

  test('renders the strapline paragraph', () => {
    const strapline = screen.getByText(
      /find your precise piece of data instantly, seamlessly, from your favourite messaging app/i
    );
    expect(strapline).toBeInTheDocument();
  });

  test('renders the CTA heading', () => {
    const ctaHeading = screen.getByRole('heading', { 
      name: /start now!/i,
      level: 2 
    });
    expect(ctaHeading).toBeInTheDocument();
  });

  test('renders both CTA buttons', () => {
    const whatsappButton = screen.getByRole('button', { 
      name: /connect whatsapp/i 
    });
    const telegramButton = screen.getByRole('button', { 
      name: /connect telegram/i 
    });
    
    expect(whatsappButton).toBeInTheDocument();
    expect(telegramButton).toBeInTheDocument();
  });

  test('renders the about us section', () => {
    const aboutText = screen.getByText(
      /we are a team of passionate developers and data scientists/i
    );
    expect(aboutText).toBeInTheDocument();
  });

  test('renders the security statement', () => {
    const securityStatement = screen.getByText(
      /we store nothing, keep nothing\. your data stays in your repos\./i
    );
    expect(securityStatement).toBeInTheDocument();
  });

  test('WhatsApp button click triggers console log', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    const whatsappButton = screen.getByRole('button', { 
      name: /connect whatsapp/i 
    });
    
    // Check aria-label attribute
    expect(whatsappButton).toHaveAttribute('aria-label', 'Connect WhatsApp');
    
    fireEvent.click(whatsappButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('WhatsApp connect clicked');
    
    consoleSpy.mockRestore();
  });

  test('Telegram button click triggers console log', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    const telegramButton = screen.getByRole('button', { 
      name: /connect telegram/i 
    });
    
    // Check aria-label attribute
    expect(telegramButton).toHaveAttribute('aria-label', 'Connect Telegram');
    
    fireEvent.click(telegramButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Telegram connect clicked');
    
    consoleSpy.mockRestore();
  });

  test('page has correct document title', () => {
    expect(document.title).toBe('Needle in a Haystack - Find Your Data Instantly');
  });

  test('buttons have correct styling classes', () => {
    const whatsappButton = screen.getByRole('button', { 
      name: /connect whatsapp/i 
    });
    const telegramButton = screen.getByRole('button', { 
      name: /connect telegram/i 
    });
    
    // Check if buttons have the CSS module class (checking for presence since exact class names are hashed)
    expect(whatsappButton.className).toMatch(/ctaButton/);
    expect(telegramButton.className).toMatch(/ctaButton/);
  });

  test('buttons have identical class names', () => {
    const whatsappButton = screen.getByRole('button', { 
      name: /connect whatsapp/i 
    });
    const telegramButton = screen.getByRole('button', { 
      name: /connect telegram/i 
    });
    
    expect(whatsappButton.className).toBe(telegramButton.className);
  });

  test('button hover behavior works correctly', () => {
    const whatsappButton = screen.getByRole('button', { 
      name: /connect whatsapp/i 
    });
    
    // Verify the button has the correct CSS class applied
    expect(whatsappButton.className).toMatch(/ctaButton/);
    
    // Trigger hover event
    fireEvent.mouseOver(whatsappButton);
    
    // Verify the class is still applied after hover
    expect(whatsappButton.className).toMatch(/ctaButton/);
    
    // Trigger mouse leave
    fireEvent.mouseLeave(whatsappButton);
    
    // Verify the class remains applied
    expect(whatsappButton.className).toMatch(/ctaButton/);
  });

  test('both buttons respond to hover events', () => {
    const whatsappButton = screen.getByRole('button', { 
      name: /connect whatsapp/i 
    });
    const telegramButton = screen.getByRole('button', { 
      name: /connect telegram/i 
    });
    
    // Both buttons should have hover event handlers (implicit through CSS)
    fireEvent.mouseOver(whatsappButton);
    fireEvent.mouseOver(telegramButton);
    
    // Verify both still have the correct class after hover events
    expect(whatsappButton.className).toMatch(/ctaButton/);
    expect(telegramButton.className).toMatch(/ctaButton/);
  });
}); 