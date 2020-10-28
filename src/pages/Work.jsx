import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl' ;
import { Link } from 'react-router-dom';
import CaseStudy from '../components/CaseStudy';

const Work = () => {
  const [projects, setProjects] = useState([]);

  return (
  <div className="container">
    <div className="row">
      <h1><FormattedMessage id='work.title' /></h1>
    </div>
    <div className="row">
      <p><FormattedMessage id='work.description' /></p>
    </div>
    <div className="row">
      <CaseStudy />
    </div>
  </div>
  );
};

export default Work;
