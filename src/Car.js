import React from 'react';

export default function Car({ make, model, year }) {
  return (
    <div>
      <h1>{make}</h1>
      <h2>{model}</h2>
      <h2>{year}</h2>
    </div>
  );
}
