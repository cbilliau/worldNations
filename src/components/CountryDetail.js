import React, { Component } from 'react';

class CountryDetail extends Component {

    render() {
        let country = this.props.country;
        // console.log('Country Details: ', country);
        return (

            <div>{country}</div>

        );
    }
}
export default CountryDetail;
