import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home';
import Contact from '../Components/Contact';
import View from '../Components/View';
import DownloadCV from '../Components/DownloadCV.js';
import Certificates from '../Components/Certificates';

function Main({ state }) {
  return (
    <Switch>
      <Route path='/contact'>
        <Contact />
      </Route>

      <Route path='/downloadCV'>
        <DownloadCV />
      </Route>

      <Route path='/certifications'>
        <Certificates />
      </Route>

      <Route path='/:title'>
        <View state={state} />
      </Route>

      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  );
}

export default Main;
