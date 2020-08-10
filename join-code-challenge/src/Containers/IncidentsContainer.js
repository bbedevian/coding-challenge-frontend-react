import React from 'react';
import IncidentCard from '../Components/IncidentCard';

const IncidentsContainer = (props) => {
    const {cases, startIndex} = props
    let endIndex = startIndex+10
    let currentSelection = []
    for (let i = startIndex; i < endIndex; i++) currentSelection.push(cases[i])
    return (
        <div className='incident-container'>
            {
            currentSelection[0] !== undefined ? 
            currentSelection.map((incident, index) => <IncidentCard key={index} incident={incident}/>)
            :
            <p>Loading...</p>
            }
        </div>
    );
}

export default IncidentsContainer;
