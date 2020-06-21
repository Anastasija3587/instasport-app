import React from 'react';
import styled from './Home.module.css';

const Home = () => {
  return (
    <div className={styled.wrap}>
      <h1>Рады видеть Вас на нашем сайте!</h1>
      <p className={styled.text}>
        Для записи на тренировку теперь достаточно пару касаний!
      </p>
    </div>
  );
};

export default Home;
