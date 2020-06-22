import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Notyf } from 'notyf';
import styled from './City.module.css';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

const City = ({
  clubs,
  filteredClubs,
  setfilteredClubs,
  chooseSport,
  setChooseSport,
  inputCity,
  setInputCity,
}) => {
  const [showCity, setShowCity] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowCity(true);
    if (chooseSport) {
      const arrFilteredClubs = filteredClubs.filter(
        club => club.city.title === inputCity,
      );
      if (arrFilteredClubs.length > 0) {
        setfilteredClubs(arrFilteredClubs);
      } else {
        notyf.error('Ничего не найдено!');
        setInputCity('');
        setShowCity(false);
      }
    } else {
      setfilteredClubs(clubs.filter(club => club.city.title === inputCity));
    }
  };

  const resetCity = () => {
    setInputCity('');
    setShowCity(false);
    if (chooseSport) {
      setfilteredClubs(
        clubs.filter(club =>
          club.activity.map(el => el.slug).includes(chooseSport),
        ),
      );
    } else {
      setfilteredClubs([]);
    }
  };

  const resetSport = () => {
    setChooseSport('');
    if (inputCity) {
      setfilteredClubs(clubs.filter(club => club.city.title === inputCity));
    } else {
      setfilteredClubs([]);
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
          ok
        </button>
      </form>
      {showCity && (
        <button className={styled.reset} onClick={resetCity} type="button">
          {inputCity} <span className={styled.span}>&#10006;</span>
        </button>
      )}
      {chooseSport && (
        <button className={styled.reset} onClick={resetSport} type="button">
          {chooseSport} <span className={styled.span}>&#10006;</span>
        </button>
      )}
    </>
  );
};

City.propTypes = {
  clubs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filteredClubs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setfilteredClubs: PropTypes.func.isRequired,
  chooseSport: PropTypes.string.isRequired,
  setChooseSport: PropTypes.func.isRequired,
  inputCity: PropTypes.string.isRequired,
  setInputCity: PropTypes.func.isRequired,
};

export default City;
