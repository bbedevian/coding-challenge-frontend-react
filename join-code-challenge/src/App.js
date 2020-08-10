import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  state = {
    cases: [],
    page: 1,

  }

  componentDidMount(
    getCases(this.state.page)
  )

  getCases = (pageNumber) => {
    fetch(`https://bikewise.org/api/v2/incidents?page=${pageNumber}&per_page=10&incident_type=theft&proximity_square=100`)
      .then(response => response.json())
      .then(cases => this.setState({cases}))
  }
  console.log('app state :>> ', this.state)
  return (
    
    <div className="App">
      
    </div>
  );
}

export default App;
