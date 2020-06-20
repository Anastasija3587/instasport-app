/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';

const Club = ({ club }) => {
  return (
    <li>
      <a href={club.link} target="_blank">
        <img src={club.logo} alt="logo" width="100" height="100" />
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
