import React, {Component} from 'react';

import CountryList from './CountryList';

class CountriesContainer extends Component {
    state = {
        countries: []
    }

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v1/all').then(data => data.json()).then(data => this.setState({countries: data})).catch(err => console.error(err));
    }

    render() {
        // const {params} = this.props;

        // if (params)
        //     return (<CountryDetail country={this.state.countries.find(c => c === params)}/>);

        return (
            <div>
              <CountryList countries={this.state.countries}/>
            </div>

        )

    }
}

export default CountriesContainer;
