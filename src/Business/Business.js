import React from 'react';
import styles from './Business.module.css';

function Business(props) {
    return (
        <div className={styles.businessDiv}>
            <img src={props.info.image} className={styles.image}/>
            <p className={styles.name}>{props.info.name}</p>
            <div className={styles.infoDiv}>
                <div className={styles.addressDiv}>
                    <p className={styles.address}>{props.info.address}</p>
                    <p className={styles.address}>{props.info.city}</p>
                    <div className={styles.stateZip}>
                        <p className={styles.address}>{props.info.state}</p>
                        <p className={styles.address}>{props.info.zip}</p>
                    </div>
                </div>
                <div className={styles.rightDiv}>
                    <p className={styles.type}>{props.info.type}</p>
                    <p className={styles.rating}>{props.info.rating} stars</p>
                    <p className={styles.reviews}>{props.info.reviews} reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Business;