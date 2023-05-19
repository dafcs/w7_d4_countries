import React from 'react';

const CountryList = ({countries,onFavSelected}) => {

  const handleClick = (country) => {
    onFavSelected(country)
  }

  const CountryItems = countries.map((country, index) => {
    return <p country={country} key={index}>{country.name.common}</p>

  })

  return (

    <>
      {CountryItems}
    </>

  )
}
{/* <input key={index}  type='submit' value='remove' onClick={()=> handleClick(country)}/> */}
export default CountryList;