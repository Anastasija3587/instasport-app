import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Clubs from '../../pages/Clubs/index';
import Blog from '../../pages/Blog/index';
import Notice from '../../pages/Notice/index';
import Home from '../../pages/Home/index';
import Header from '../Header/index';
import styled from './App.module.css';

const App = () => {
  return (
    <div className={styled.container}>
      <div className={styled.wrapper}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/clubs" component={Clubs} />
          <Route path="/notice" component={Notice} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
