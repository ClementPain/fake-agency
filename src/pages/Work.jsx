import React from 'react';
import { FormattedMessage } from 'react-intl' ;

import CaseStudy from '../components/CaseStudy';

import projects from '../data/projects';

const Work = () => {
  return (
    <div className="container">
      <div className="row">
        <h1><FormattedMessage id='work.title' /></h1>
      </div>
      <div className="row">
        <p><FormattedMessage id='work.description' /></p>
      </div>
      <div className="row mt-5">
        {projects.map(project => (
          <div className="col-md-4"><CaseStudy project={project} /></div>
        ))}
      </div>
    </div>
  );
};

export default Work;
