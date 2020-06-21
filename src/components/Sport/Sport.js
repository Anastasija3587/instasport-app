import React from 'react';
import PropTypes from 'prop-types';
import styled from './Sport.module.css';

const Sport = ({ setChooseSport, clubs, filteredClubs, setfilteredClubs }) => {
  const fn = () => {
    const sports = [];
    if (filteredClubs.length > 0) {
      filteredClubs
        .map(club => club.activity)
        .map(el => el.map(e => e.slug))
        .forEach(el => sports.push(...el));
    } else {
      clubs
        .map(club => club.activity)
        .map(el => el.map(e => e.slug))
        .forEach(el => sports.push(...el));
    }

    return sports;
  };

  const handleClick = event => {
    setChooseSport(true);
    if (filteredClubs.length > 0) {
      setfilteredClubs(
        filteredClubs.filter(club =>
          club.activity.map(el => el.slug).includes(event.target.value),
        ),
      );
    } else
      setfilteredClubs(
        clubs.filter(club =>
          club.activity.map(el => el.slug).includes(event.target.value),
        ),
      );
  };
  return (
    <div className={styled.wrap}>
      {Array.from(new Set(fn()))
        .sort()
        .map(sport => (
          <button
            className={styled.btn}
            onClick={handleClick}
            value={sport}
            key={sport}
            type="button"
          >
            {sport}
          </button>
        ))}
    </div>
  );
};

Sport.propTypes = {
  clubs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filteredClubs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setfilteredClubs: PropTypes.func.isRequired,
  setChooseSport: PropTypes.func.isRequired,
};

export default Sport;
