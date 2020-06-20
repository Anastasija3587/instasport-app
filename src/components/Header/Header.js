import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <NavLink to="/clubs">Clubs</NavLink>
      <NavLink to="/notice">Notice</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </>
  );
};

export default Header;
