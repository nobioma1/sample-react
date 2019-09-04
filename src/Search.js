import React, { useState } from 'react';

const Search = () => {
  const [location, setLocation] = useState('San Francisco');

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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Search;
