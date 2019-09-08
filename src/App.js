import React, { useState } from 'react';
import { render } from 'react-dom';
import Car from './Car';
import Search from './Search';
import ThemeContext from './ThemeContext';

const App = () => {
  const themeHook = useState('darkblue');
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <h1>Sample React</h1>
        <Search />
        <Car make="Mercedes-Benz" model="G-wagon" year="2019" />
        <Car make="Lexus" model="LC 500" year="2019" />
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById('root'));
