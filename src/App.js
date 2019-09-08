import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import Search from './Search';
import ThemeContext from './ThemeContext';
import Cars from './Cars';

const App = () => {
  const themeHook = useState('darkblue');
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <h1>Sample React</h1>
        <Link to="/cars">Cars</Link> <br />
        <Link to="/search">Search</Link>
        <Router>
          <Cars path="/cars" />
          <Search path="/search" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById('root'));
