import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import NavBar from '../../../components/NavBar';

let container

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders correctly', () => {
  act(() => {
    ReactDOM.render(<NavBar />, container);
  });
  // Check that the brand text is correct.
  const brand = container.querySelector('.navbar-brand');
  expect(brand.textContent).toBe('JacobBN');

  // Check that all menu items are correct.
  const nav = container.querySelectorAll('.nav-link');

  let homeLink = nav[0].href.split('/');
  homeLink = homeLink[homeLink.length - 1];
  expect(homeLink).toBe('#home');
  
  let portfolioLink = nav[1].href.split('/');
  portfolioLink = portfolioLink[portfolioLink.length - 1];
  expect(portfolioLink).toBe('#portfolio');

  let contactLink = nav[2].href.split('/');
  contactLink = contactLink[contactLink.length -1];
  expect(contactLink).toBe('#contact');

  let githubLink = nav[3].href;
  expect(githubLink).toBe('https://github.com/JacobBN');

  let linkedInLink = nav[4].href;
  expect(linkedInLink).toBe('https://www.linkedin.com/in/jacobbn');
});
