import React from 'react';
import styles from './SearchBar.module.css'

function SearchBar(props) {
    return (
        <>
            <div className={styles.bar}>
                <p className={styles.ravenous}>ravenous</p>
            </div>
            <div className={styles.searchDiv}>

            </div>
        </>
    )
}

export default SearchBar;