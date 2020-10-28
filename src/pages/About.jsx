import React from 'react';
import { FormattedMessage } from 'react-intl' ;

const About = () => (
  <div className="container">
    <div className="row">
      <h1><FormattedMessage id='about.title' /></h1>
    </div>
    <div className="row">
      <p><FormattedMessage id='about.description_1' /></p>
    </div>
    <div className="row">
      <p><FormattedMessage id='about.description_2' /></p>
    </div>
  </div>
);

export default About;
