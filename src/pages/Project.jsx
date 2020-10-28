import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl' ;

import projects from '../data/projects';

const Project = ({ match }) => {
  const [currentProject, setCurrentProject] = useState({});

  useEffect(() => {
    setCurrentProject(projects.find( project => project.slug === match.params.project ));
  }, [match]);

  console.log(currentProject);

  return (
    <div className="container mt-5">
      <div className="row">
        <h1>{currentProject.name}</h1>
      </div>
      <div className="row">
        <h3><FormattedMessage id={`${currentProject.title}`} /></h3>
      </div>
      <div className="row">
        <p><FormattedMessage id={`${currentProject.description}`} /></p>
      </div>
    </div>
  );
  };

export default Project;