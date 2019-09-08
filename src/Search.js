import React, { useState, useContext } from 'react';
import ThemeContext from './ThemeContext';

const Search = () => {
  const [location, setLocation] = useState('San Francisco');
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
    </div>
  );
};

export default Search;
