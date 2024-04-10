// import necessary react testing library helpers here
// import the Counter component here
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

let counter_component;
beforeEach(() => {
  // Render the Counter component here

    counter_component=render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    const counterMessage = 'Counter';
    expect(document.getElementsByTagName('h2')[0].textContent).toBe(counterMessage);
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const initialCount = '0';
    expect(document.querySelector('[data-testid="count"]').textContent).toBe(initialCount);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    const incrementButton = counter_component.getByText('+');
    fireEvent.click(incrementButton);
    const countElement = counter_component.getByTestId('count');
    expect(countElement.textContent).toBe('1');

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    const decrementButton = counter_component.getByText('-');
    fireEvent.click(decrementButton);
    const countElement = counter_component.getByTestId('count');
    expect(countElement.textContent).toBe('-1');
});