import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Home from '../../../views/Home';
import { exportAllDeclaration } from '@babel/types';

let container

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders without crashing', () => {
  act(() => {
    ReactDOM.render(<Home />, container);
  });
  const headers = container.getElementsByTagName('h2');
  expect(headers.length).toBeGreaterThan(0);
  expect(headers[0].textContent).toBe('Welcome');

  expect(container.getElementsByTagName('p').length).toBeGreaterThan(0);
  
  const cards = container.getElementsByClassName('card');
  expect(cards.length).toBe(2);
  expect(cards[0].getElementsByTagName('p').length).toBeGreaterThan(0);
  expect(cards[1].getElementsByTagName('p').length).toBeGreaterThan(0);
});
