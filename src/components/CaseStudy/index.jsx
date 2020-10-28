import React from 'react';
import { FormattedMessage } from 'react-intl' ;
import { Link } from 'react-router-dom';

const CaseStudy = ({ project }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted"><FormattedMessage id={project.title} /></h6>
        <Link to={`/work/${project.slug}`} className="card-link">Lien vers le projet</Link>
      </div>
    </div>
  );
};

export default CaseStudy;
