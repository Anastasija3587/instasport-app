import React from 'react';
import List from '../../components/List/index';
import styled from './Clubs.module.css';

const Clubs = () => {
  return (
    <>
      <p className={styled.text}>Запись на тренировки онлайн</p>
      <List />
    </>
  );
};

export default Clubs;
