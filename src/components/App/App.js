import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Clubs from '../../pages/Clubs/index';
import Blog from '../../pages/Blog/index';
import Notice from '../../pages/Notice/index';
import Home from '../../pages/Home/index';
import Header from '../Header/index';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/clubs" component={Clubs} />
        <Route path="/notice" component={Notice} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </>
  );
};

export default App;
