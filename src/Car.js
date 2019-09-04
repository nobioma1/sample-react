import React from 'react';

export default function Car({ make, model, year }) {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, make),
    React.createElement('h2', {}, model),
    React.createElement('h2', {}, year)
  ]);
}
