import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from './Header.module.css';

const activeStyle = {
  fontWeight: 'bold',
  transform: 'translateY(-2px)',
};

const Header = () => {
  return (
    <div className={styled.header}>
      <NavLink activeStyle={activeStyle} exact className={styled.nav} to="/">
        Home
      </NavLink>
      <NavLink activeStyle={activeStyle} className={styled.nav} to="/clubs">
        Clubs
      </NavLink>
      <NavLink activeStyle={activeStyle} className={styled.nav} to="/notice">
        Notice
      </NavLink>
      <NavLink activeStyle={activeStyle} className={styled.nav} to="/blog">
        Blog
      </NavLink>
    </div>
  );
};

export default Header;
