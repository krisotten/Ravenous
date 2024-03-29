import React from 'react';
import Business from '../Business/Business.js';
import styles from './BusinessList.module.css';

function BusinessList(props) {
    return (
        <div className={styles.list}>
            {props.list.map(business => {
                return <Business info={business} />
            })}
        </div>
    )
}

export default BusinessList;