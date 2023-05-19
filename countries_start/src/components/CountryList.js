import React from 'react';
import CountrySelect from '../components/CountrySelect'

const CountryList = ({countries, onCountrySelected}) => {

    const CountryItems = countries.map((country, index) => {
      return <CountrySelect country={country} key={index} onCountrySelect={onCountrySelected}/>
    })

  return (

    <>
      {CountryItems}
    </>

  )
}

export default CountryList;