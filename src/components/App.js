import React, { Component } from 'react';

import CountriesContainer from './CountriesContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Countries & Capitals</h2>
        </div>
        <div className="App-text">
          <CountriesContainer />
        </div>
      </div>
    );
  }
}

export default App;
