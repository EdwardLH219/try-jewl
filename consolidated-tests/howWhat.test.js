import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('How What Section', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('renders How to use heading', () => {
    const howToUseHeading = screen.getByRole('heading', { name: /how to use/i });
    expect(howToUseHeading).toBeInTheDocument();
  });

  test('renders What for heading', () => {
    const whatForHeading = screen.getByRole('heading', { name: /what for/i });
    expect(whatForHeading).toBeInTheDocument();
  });

  test('How to use section has exactly three list items', () => {
    const howToUseHeading = screen.getByRole('heading', { name: /how to use/i });
    const howToUseSection = howToUseHeading.closest('div');
    const listItems = howToUseSection.querySelectorAll('li');
    expect(listItems).toHaveLength(3);
  });

  test('What for section has exactly three list items', () => {
    const whatForHeading = screen.getByRole('heading', { name: /what for/i });
    const whatForSection = whatForHeading.closest('div');
    const listItems = whatForSection.querySelectorAll('li');
    expect(listItems).toHaveLength(3);
  });

  test('renders specific How to use examples', () => {
    expect(screen.getByText('Store this reference number for me')).toBeInTheDocument();
    expect(screen.getByText('What is my passport number')).toBeInTheDocument();
    expect(screen.getByText('What is the schedule for my exams')).toBeInTheDocument();
  });

  test('renders specific What for examples', () => {
    expect(screen.getByText('Storing information that you need to retrieve later')).toBeInTheDocument();
    expect(screen.getByText('Searching precise info in a scanned doc, image or repositories')).toBeInTheDocument();
    expect(screen.getByText('Find the latest figures, report results or something lost in an ocean of info')).toBeInTheDocument();
  });

  test('how-what section has correct id', () => {
    const howWhatSection = document.getElementById('how-what');
    expect(howWhatSection).toBeInTheDocument();
  });

  test('renders legend emojis with proper aria-labels', () => {
    expect(screen.getByLabelText('doc accepted')).toBeInTheDocument();
    expect(screen.getByLabelText('media error')).toBeInTheDocument();
    expect(screen.getByLabelText('file already uploaded')).toBeInTheDocument();
    expect(screen.getByLabelText('processing')).toBeInTheDocument();
    expect(screen.getByLabelText('complete')).toBeInTheDocument();
  });

  test('renders adoption section heading', () => {
    const adoptionHeading = screen.getByRole('heading', { name: /how to adopt jewl/i });
    expect(adoptionHeading).toBeInTheDocument();
  });
}); 