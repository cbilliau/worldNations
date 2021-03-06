import React, { Component } from 'react';

import { alphabatize } from '../utils';
import CountryList from './CountryList';

class CountriesContainer extends Component {
    state = {
        countries: []
    }

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v1/all')
        .then(data => data.json())
        .then(data => this.setState({countries: alphabatize(data)}))
        // .then(data => alphabatize(this.state.countries))
        .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
              <CountryList countries={this.state.countries}/>
            </div>
        )
    }
}

export default CountriesContainer;
