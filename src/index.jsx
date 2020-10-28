import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import 'bootswatch/dist/superhero/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './pages/Home';

import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
