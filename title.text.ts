// Title.test.js

import React from 'react';
import { render, unmountComponentAtNode } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers like toHaveTextContent
import Title from './Title';

// Helper function to clean up on component unmount
const setupComponent = (title) => {
  const container = document.createElement('div');
  render(<Title>{title}</Title>, { container });
  return container;
};

// Helper function to reset the document title
const resetDocumentTitle = () => {
  document.title = 'Default page title';
};

// Mocking console.error to silence the error regarding unmocked useEffect
const consoleError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = consoleError;
});

describe('<Title />', () => {
  it('should set the page title to "Page Title"', () => {
    const pageTitle = 'Page Title';
    const container = setupComponent(pageTitle);

    expect(document.title).toBe(pageTitle);
    unmountComponentAtNode(container);
  });

  it('should set the page title to "Default page title" when no children are provided', () => {
    const container = setupComponent();

    expect(document.title).toBe('Default page title');
    unmountComponentAtNode(container);
  });

  it('should reset the page title to the previous title on unmount', () => {
    const pageTitle = 'Page Title';
    const container = setupComponent(pageTitle);

    // Save the current document title
    const previousTitle = document.title;

    // Unmount the component
    unmountComponentAtNode(container);

    // Verify that the title is reset to the previous title
    expect(document.title).toBe(previousTitle);
  });
});
