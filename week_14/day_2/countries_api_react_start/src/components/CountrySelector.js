import React from 'react';

const CountrySelector = (props) => {
  const options = props.countries.map((country, index) => {
    return <option value={index} key={index}>{country.name}</option>
  });

  const handleChange = (event) => {
    let index = event.target.value;
    props.onCountrySelected(index);         // this is the function we passed in as a prop
  }

  return (
    <select
      onChange={handleChange}
      id="country-selector"
      defaultValue="default">
      <option disabled value="default">Choose a country...</option>
      {options}
    </select>
  )
}

export default CountrySelector;
