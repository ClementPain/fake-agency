import React from 'react';
import { FormattedMessage } from 'react-intl' ;

const Home = () => (
  <div className="container">
    <div className="row">
      <h1><FormattedMessage id='home.title' /></h1>
    </div>
    <div className="row">
      <p><FormattedMessage id='home.description_1' /></p>
    </div>
    <div className="row">
      <p><FormattedMessage id='home.description_2' /></p>
    </div>
  </div>
);

export default Home;
