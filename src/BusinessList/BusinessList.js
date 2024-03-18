import React from 'react';
import Business from '../Business/Business.js';

function BusinessList(props) {
    return (
        <div>
            {props.list.map(business => {
                return <Business info={business} />
            })}
        </div>
    )
}