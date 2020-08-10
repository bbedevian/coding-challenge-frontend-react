import React from 'react';

const IncidentCard = (props) => {
    const {incident} = props
    // let date = new Date(incident.occurred_at)

    return (
        <div className='incident-card'>
            {incident.title}
            {incident.description}
        </div>
    );
}

export default IncidentCard;

