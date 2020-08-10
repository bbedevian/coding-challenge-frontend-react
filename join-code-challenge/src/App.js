import React, { Component } from 'react';
import './App.css';
import HomePage from './Containers/HomePage';

class App extends Component {

  state = {
    details: {}
  }

  render() {
    return (
      <div>
        <center>
        <HomePage/>
        </center>
      </div>
    );
  }
}

export default App;

