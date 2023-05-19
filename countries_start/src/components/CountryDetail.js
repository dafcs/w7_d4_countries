import React from 'react';
import './ListItem.css';

const countryDetail = function({country}) {


    return (
      <div className="country-details-container">
        <div className='country-capital'>
        The capital of {country.name.common} is {country.capital}
        </div>
        
      </div>
    )

}
export default countryDetail;