import React from 'react';
import frFlag from '../../../assets/images/flags/fr.png';
import enFlag from '../../../assets/images/flags/en.png';

import './index.scss';

const ButtonLanguage = ({setLanguage, languages}) => {
  const flags = { fr: frFlag, en: enFlag };

  return (
  <ul className="navbar-nav">
    { languages.map(language => (
      <li className="nav-item mr-4" key={ language }>
          <img
           className="nav-link flags-img"
           src={flags[language]}
           onClick={() => setLanguage(language)}
           alt={language}
          />
      </li>
    ))}
  </ul>
  );
};

export default ButtonLanguage;
