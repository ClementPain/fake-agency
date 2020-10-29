import React from 'react';

const ButtonLanguage = ({setLanguage, languages}) => {
 
  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
  <div className="btn-group">
    <div className="form-group">
      <select onChange={handleChangeLanguage} className="form-control">
        { languages.map(language => (
          <option value = { language } key = { language }>{ language }</option>
        ))}
      </select>
    </div>
  </div>
  );
};

export default ButtonLanguage