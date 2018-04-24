import React from 'react';

const CountryDetail = (props) => {
  if(!props.country) return null;

  return (
    <article>
      <h3>{props.country.name}</h3>
      <img
        style= {{ width: "300px" }}
        src={props.country.flag}
        alt={props.country.name} />
    </article>
  )
}

export default CountryDetail;
