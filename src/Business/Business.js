import React from 'react';

function Business(props) {
    return (
        <>
            <img src={props.info.image}/>
            <p>{props.info.name}</p>
            <p>{props.info.address}</p>
            <p>{props.info.city}</p>
            <p>{props.info.state}</p>
            <p>{props.info.zip}</p>
            <p>{props.info.type}</p>
            <p>{props.info.rating}</p>
            <p>{props.info.reviews}</p>
        </>
    );
}

export default Business;