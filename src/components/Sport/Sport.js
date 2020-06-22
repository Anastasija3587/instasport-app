import React from 'react';
import PropTypes from 'prop-types';
import { Notyf } from 'notyf';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from './Sport.module.css';
import 'notyf/notyf.min.css';
import pop from '../../transitions/pop.module.css';

const notyf = new Notyf();

const Sport = ({
  setChooseSport,
  clubs,
  filteredClubs,
  setfilteredClubs,
  inputCity,
  chooseSport,
}) => {
  const sports = () => {
    const arrSports = [];
    clubs
      .map(club => club.activity)
      .map(el => el.map(e => e.slug))
      .forEach(el => arrSports.push(...el));

    return Array.from(new Set(arrSports));
  };

  const handleClick = event => {
    if (chooseSport) return;
    setChooseSport(event.target.value);
    if (inputCity) {
      const arrFilterClubs = filteredClubs.filter(club =>
        club.activity.map(el => el.slug).includes(event.target.value),
      );
      if (arrFilterClubs.length > 0) {
        setfilteredClubs(arrFilterClubs);
      } else {
        notyf.error('Ничего не найдено!');
        setChooseSport('');
      }
    } else
      setfilteredClubs(
        clubs.filter(club =>
          club.activity.map(el => el.slug).includes(event.target.value),
        ),
      );
  };
  return (
    <TransitionGroup component="div" className={styled.wrap}>
      {sports()
        .sort()
        .map(sport => (
          <CSSTransition
            key={sport}
            unmountOnExit
            classNames={pop}
            timeout={250}
          >
            <button
              className={styled.btn}
              onClick={handleClick}
              value={sport}
              key={sport}
              type="button"
            >
              {sport}
            </button>
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
};

Sport.propTypes = {
  clubs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filteredClubs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setfilteredClubs: PropTypes.func.isRequired,
  setChooseSport: PropTypes.func.isRequired,
  inputCity: PropTypes.string.isRequired,
  chooseSport: PropTypes.string.isRequired,
};

export default Sport;
