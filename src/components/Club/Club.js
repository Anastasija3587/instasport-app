/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import styled from './Club.module.css';

const Club = ({ club }) => {
  return (
    <li className={styled.item}>
      <a className={styled.link} href={club.link} target="_blank">
        <img className={styled.logo} src={club.logo} alt="logo" />
        <p>{club.city.slug}</p>
      </a>
    </li>
  );
};

Club.propTypes = {
  club: PropTypes.shape({
    link: PropTypes.string,
    logo: PropTypes.string,
    city: PropTypes.shape(),
  }).isRequired,
};

export default Club;
