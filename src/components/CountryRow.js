import React, {Component} from 'react';
import './CountryRow.css';

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
        console.log(this.state.renderDetails);
        return (
            <tr onClick={ () => this.handleClick() } className="CountryRow">
              <td>{country.region}</td>
              <td>{country.name}</td>
              <td>{this.state.renderDetails ? <CountryDetail country={country}/>: null}</td>
            </tr>
        );
    }
};

export default CountryRow;
