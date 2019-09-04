import React from 'react';
import { render } from 'react-dom';
import Car from './Car';
import Search from './Search';

const App = () => {
  return (
    <div>
      <h1>Sample React</h1>
      <Search />
      <Car make="Mercedes-Benz" model="G-wagon" year="2019" />
      <Car make="Lexus" model="LC 500" year="2019" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
