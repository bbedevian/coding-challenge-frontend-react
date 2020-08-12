import React from 'react';

const IncidentCard = (props) => {
    const {incident} = props
    let date = new Date(incident.occurred_at)
    let month = date.getMonth()
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    return (
        <div className='incident-card'>
            {incident.title}
            <br></br>
            happened at {hours}:{minutes}:{seconds} on {month+1}/{day}
            <br></br>
            {incident.address}
            <br></br>
            {incident.description}
        </div>
    );
}

export default IncidentCard;

