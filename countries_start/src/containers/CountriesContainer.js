import React, { useState, useEffect } from 'react';
import CountrySelect from '../components/CountrySelect';
import CountryDetail from '../components/CountryDetail'
import './CountriesContainer.css';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);


    useEffect(() => {
      getCountries();
    }, [])
    

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    // const onCountryClicked = function(country) {
    //     setSelectedCountry(country)
    // }
    const onCountrySelected = function(country) {
        setSelectedCountry(country)
    }

    // const handleChange = () => {
    //     console.log("handleChange")
    // }
    

    return (
        <>
        <div className="main-container">

                    <CountrySelect countries={countries} onCountrySelected={onCountrySelected}/>

            
        </div>
        {selectedCountry? <CountryDetail country={selectedCountry}/>:null}
        </>
    )
}

export default CountryContainer;
