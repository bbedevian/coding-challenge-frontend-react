import React, { Component } from 'react';
import IncidentsContainer from './IncidentsContainer';

class HomePage extends Component {
    state={
        cases: [],
        startIndex: 0,
        filtered: false,
        detail: false,
        search: '',
        after: '',
        before: '',
    }


    handleChange = e => this.setState({ [e.target.name]: e.target.value })
    

    getCases = () => {
        fetch(`https://bikewise.org/api/v2/incidents?incident_type=theft&proximity=10028&proximity_square=10`)
          .then(response => response.json())
          .then(incidents => this.setState({cases: incidents.incidents}))
    }

   

    handleSubmit() {
        // console.log('this.state :>> ', this.state);
        this.setState({filtered: true})
    }
    // searchCases(){
    //     console.log('before', this.state)
    //     this.setState({cases: []})
    //     // fetch(`https://bikewise.org/api/v2/incidents?occurred_before=${before}&occurred_after=${after}&incident_type=theft&query=${search}`)
    //     fetch(`https://bikewise.org/api/v2/incidents?incident_type=theft&query=${this.state.search}`)
    //     .then(resp => resp.json())
    //     .then(incidents => {
    //         this.setState({cases: incidents.incidents})
    //     })
        
    //     .then(this.setState({search: '', after: '', before: '',}))
    // }
    
    changepage = (page) => {
        this.setState({startIndex: page})
    }

    filterCases = (cases) => {
        const {search} = this.state
        cases.filter(incident => {if(incident.description !== null && incident.description.includes(search)){return incident} })
    }

    componentDidMount(){this.getCases(this.state.pageNum)}

    render() {
        const {cases, search, before, after, startIndex, filtered} = this.state
        let filteredCases = filtered ? this.filterCases(cases) : cases
        return (
            <div>
                <h3>Placeholder Header</h3>
                <input name='search' value={search} onChange={this.handleChange} placeholder='Search Case Descriptions'/>
                <input name='after' value={after} onChange={this.handleChange} placeholder='after'/>
                <input name='before' value={before} onChange={this.handleChange}placeholder='before'/>
                <button onClick={() => this.handleSubmit()}>Search</button>
                
                <p>Total Cases: {filteredCases.length}</p>
                <IncidentsContainer cases={filteredCases} startIndex={startIndex}/>
                <button onClick={() => this.changepage(0)}> First </button>
                <button onClick={() => this.changepage(startIndex-2)}> Prev </button>
                <button onClick={() => this.changepage(startIndex+2)}> Next </button>
                <button> Last </button>
            </div>
        );
    }
}

export default HomePage;
