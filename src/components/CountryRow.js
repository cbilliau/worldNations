import React from 'react';
import './CountryRow.css';

// import { numberize } from '../utils';

const CountryRow = ({ country }) => {
  const { countryName, countryCode, capital, areaInSqKm, population, continent } = country;

  return (
    <tr className="CountryRow">
      <td>{ countryName }</td>
      <td>{ countryCode }</td>
      <td>{ capital }</td>
      {/* <td>{ numberize(areaInSqKm) }</td>
      <td>{ numberize(population) }</td> */}
      <td>{ continent }</td>
    </tr>

  );
};

export default CountryRow;
