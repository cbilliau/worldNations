import React from 'react';
import './CountryList.css';

import CountryRow from './CountryRow';

const CountryList = ({countries}) => {
    if (countries.length < 1)
        return <div className='CountryList is-loading'><br/><h2>Loading...</h2></div>;

          return (
          <div className='CountryList App-text'>
            <table>
              <tbody>
                <tr>
                  <th>Region</th>
                  <th>Name</th>
                  <th>Alpha2Code</th>
                  <th>Capital</th>
                  <th>Population</th>
                  <th>Area (Km2)</th>
                  <th># of Timezones</th>
                  <th>Languages</th>
                </tr>
                {countries.map(c => <CountryRow key={c.name} country={c} />)}
              </tbody>
            </table>
        </div>
    );
};

export default CountryList;
