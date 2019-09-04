import React from 'react';
import { render } from 'react-dom';
import Car from './Car';

const App = () => {
  return React.createElement(
    'div',
    {},
    // React.createElement(htmlTag, {<attributes>}, children)
    [
      React.createElement('h1', {}, 'Sample React'),
      React.createElement(Car, {
        make: 'Mercedes-Benz',
        model: 'G-wagon',
        year: '2019'
      }),
      React.createElement(Car, {
        make: 'Lexus',
        model: 'LC 500',
        year: '2019'
      })
    ]
  );
};

render(React.createElement(App), document.getElementById('root'));
