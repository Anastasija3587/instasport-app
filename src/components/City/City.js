import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from './City.module.css';

const City = ({ clubs, filteredClubs, setfilteredClubs, chooseSport }) => {
  const [inputCity, setInputCity] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (chooseSport) {
      setfilteredClubs(
        filteredClubs.filter(club => club.city.title === inputCity),
      );
    } else {
      setfilteredClubs(clubs.filter(club => club.city.title === inputCity));
    }
  };
  return (
    <>
      <form className={styled.wrap} onSubmit={handleSubmit}>
        <select
          className={styled.select}
          value={inputCity}
          onChange={event => setInputCity(event.target.value)}
        >
          <option>Выберите город</option>
          {Array.from(new Set(clubs.map(club => club.city.title))).map(city => (
            <option key={city}>{city}</option>
          ))}
        </select>
        <button className={styled.btn} type="submit">
          &#10004;
        </button>
      </form>
    </>
  );
};

City.propTypes = {
  clubs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filteredClubs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setfilteredClubs: PropTypes.func.isRequired,
  chooseSport: PropTypes.bool.isRequired,
};

export default City;
