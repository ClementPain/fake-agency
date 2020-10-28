import React from 'react';
import { FormattedMessage } from 'react-intl' ;

const Work = () => (
  <div className="container">
    <div className="row">
      <h1><FormattedMessage id='work.title' /></h1>
    </div>
    <div className="row">
      <p><FormattedMessage id='work.description' /></p>
    </div>
  </div>
);

export default Work;
