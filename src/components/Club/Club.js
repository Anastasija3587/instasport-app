/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import styled from './Club.module.css';

const Club = ({ club }) => {
  return (
    <li className={styled.item}>
      <a className={styled.link} href={club.link} target="_blank">
        <img className={styled.logo} src={club.logo} alt={club.title_short} />
        <p className={styled.name}>{club.title_short}</p>
      </a>
    </li>
  );
};

Club.propTypes = {
  club: PropTypes.shape({
    link: PropTypes.string,
    logo: PropTypes.string,
    title_short: PropTypes.string,
  }).isRequired,
};

export default Club;
