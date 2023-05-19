import React from 'react';
import './ListItem.css';

const ListItem = ({country}) => {

  
  // const handleClick = function() {
  //   console.log(`Clicked the ${country.name.common}`)
  //   onCountryClicked(country)
  // }
  return <option value={country.cca2}>{country.name.common}</option>
}

export default ListItem;