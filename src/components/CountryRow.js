import React, {Component} from 'react';
import {numberfy} from '../utils';

import './CountryRow.css';

import CountryDetail from './CountryDetail';

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
        const countryProps = [
            'alpha2Code',
            'capital',
            'population',
            'area',
            'timezones',
            'languages'
        ];

        let country = this.props.country;

        return (
            <tr onClick={() => this.handleClick()} className='CountryRow'>
                <td>{country.region}</td>
                <td>{country.name}</td>
                {countryProps.map(countryProp => <td>{this.state.renderDetails
                        ? <CountryDetail country={country[countryProp]}/>
                        : null}</td>)}
            </tr>
        );
    }
    // let country = this.props.country;
    // return (
    //     <tr onClick={ () => this.handleClick() } className='CountryRow'>
    //       <td>{country.region}</td>
    //       <td>{country.name}</td>
    //       <td>{this.state.renderDetails ? <CountryDetail country={country.alpha2Code}/>: null}</td>
    //       <td>{this.state.renderDetails ? <CountryDetail country={country.capital}/>: null}</td>
    //       <td>{this.state.renderDetails ? <CountryDetail country={country.population}/>: null}</td>
    //       <td>{this.state.renderDetails ? <CountryDetail country={country.area}/> : null}</td>
    //       <td>{this.state.renderDetails ? <CountryDetail country={ numberfy(country.timezones) }/> : null }</td>
    //       <td>{this.state.renderDetails ? <CountryDetail country={country.languages}/>: null}</td>
    //     </tr>
    // );
};

export default CountryRow;
