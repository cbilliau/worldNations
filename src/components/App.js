import React, { Component } from 'react';

import CountriesContainer from './CountriesContainer';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Countries & Capitals</h2>
          <CountriesContainer />
        </div>
        <div className="App-text">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
