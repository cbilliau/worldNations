import React from 'react';

const CountryDetail = ({ country }) => {
  const { countryName, countryCode, capital, areaInSqKm, population, continent } = country;

  return (
    <div>
      <h3>{ countryName }</h3>
    </div>
  );
};

export default CountryDetail;
