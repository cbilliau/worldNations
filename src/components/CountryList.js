import React from 'react';
import './CountryList.css';

import CountryRow from './CountryRow';

const CountryList = ({ countries }) => {
  // if (countries.length < 1) return <div className="CountryList is-loading">Loading...</div>;

  return (
    <div className="CountryList">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country Code</th>
            <th>Capital</th>
            <th>Area in km2</th>
            <th>Population</th>
            <th>Continent</th>
          </tr>
        </thead>
        <tbody>
          {countries.map(c => <CountryRow key={c.name} country={c} />)}
        </tbody>
      </table>
    </div>
  );
};

export default CountryList;
