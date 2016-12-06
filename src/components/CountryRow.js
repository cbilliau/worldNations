import React, {Component} from 'react';
import './CountryRow.css';

import { numberfy } from '../utils';
import CountryDetail from './CountryDetail';

// import { numberize } from '../utils';

class CountryRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderDetails: false
        }
    }

    handleClick() {
        this.setState({
            renderDetails: !this.state.renderDetails
        })
    }

    render() {
        let country = this.props.country;
        return (
            <tr onClick={ () => this.handleClick() } className="CountryRow">
              <td>{country.region}</td>
              <td>{country.name}</td>
              <td>{this.state.renderDetails ? <CountryDetail country={country.alpha2Code}/>: null}</td>
              <td>{this.state.renderDetails ? <CountryDetail country={country.capital}/>: null}</td>
              <td>{this.state.renderDetails ? <CountryDetail country={country.population}/>: null}</td>
              <td>{this.state.renderDetails ? <CountryDetail country={country.area}/>: null}</td>
              <td>{this.state.renderDetails ? <CountryDetail country={ numberfy(country.timezones) }/> : null }</td>
              <td>{this.state.renderDetails ? <CountryDetail country={country.languages}/>: null}</td>
            </tr>
        );
    }
};

export default CountryRow;
