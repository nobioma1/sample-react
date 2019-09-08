import React, { useState, useContext } from 'react';
import ThemeContext from './ThemeContext';
import Modal from './Modal';

const Search = () => {
  const [location, setLocation] = useState('San Francisco');
  const [isOpen, setModal] = useState(false);
  const [theme] = useContext(ThemeContext);

  const toggleModal = () => setModal(!isOpen);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <button style={{ backgroundColor: theme }} onClick={toggleModal}>
          Submit
        </button>
        {isOpen && (
          <Modal>
            <div>
              <h1>This is portal modal and you clicked submit button</h1>
              <button onClick={toggleModal}>Close</button>
            </div>
          </Modal>
        )}
      </form>
    </div>
  );
};

export default Search;

/* 
  // Using Context with Class Components
  <ThemeContext.Consumer>
    {
      ([theme]) => (
        <button style={{ backgroundColor: theme }}>
          Submit
        </button>
      )
    }
  </ThemeContext.Consumer>
*/
