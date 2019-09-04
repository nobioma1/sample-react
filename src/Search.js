import React from 'react';

const Search = () => {
  const location = 'San Francisco';

  return (
    <div>
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Search;
