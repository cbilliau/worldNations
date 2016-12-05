import React from 'react';
import './CountryList.css';

import CountryRow from './CountryRow';

const CountryList = ({countries}) => {
    if (countries.length < 1)
        return <div className="CountryList is-loading">Loading...</div>;

    return (
        <div className="CountryList">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Name</th>
                <th>Details</th>
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
