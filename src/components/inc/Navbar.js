import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return React.createElement(
    'nav',
    { className: 'navbar' },
    [
      React.createElement(
        'div',
        { className: 'nav-left', key: 'nav-left' },
        [
          React.createElement('img', {
            src: '/acapth.png',
            alt: 'Logo',
            className: 'logo',
            key: 'logo'
          }),
          React.createElement(
            'span',
            { className: 'site-title', key: 'site-title' },
            'Acapath'
          )
        ]
      ),
      React.createElement(
        'ul',
        { className: 'nav-list', key: 'nav-list' },
        [
          React.createElement(
            'li',
            { className: 'nav-item', key: 'home' },
            React.createElement(Link, { to: '/' }, 'Home')
          ),
          React.createElement(
            'li',
            { className: 'nav-item', key: 'question' },
            React.createElement(Link, { to: '/question' }, 'Assessment')
          )
        ]
      )
    ]
  );
}

export default Navbar;
