import React from 'react';
import './ListItem.css';

const countryDetail = function({country}) {


    return (
        <div className="country-detail">
        The capital of {country.name.common} is {country.capital}
      </div>
    )

}
export default countryDetail;