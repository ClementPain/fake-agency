import React from 'react';


const ButtonLanguage = ({setLanguage}) => {
 
const handleChangeLanguage = (event) => {
  setLanguage(event.target.value)
console.log(event)
}

 return (
<div className="btn-group">
  <div className="form-group">
    <select onChange={handleChangeLanguage} className="form-control">
      <option value='en'>en</option>
      <option value='fr'>fr</option>
    </select>
  </div>
</div>
  )
}

export default ButtonLanguage