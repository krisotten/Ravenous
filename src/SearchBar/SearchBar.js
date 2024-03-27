import React from 'react';
import styles from './SearchBar.module.css'

function SearchBar(props) {
    return (
        <>
            <div className={styles.bar}>
                <p className={styles.ravenous}>ravenous</p>
            </div>
            <div className={styles.searchDiv}>
                <div className={styles.filters}>
                    <p>Best Match</p>
                    <p>Highest Rated</p>
                    <p>Most Reviewed</p>
                </div>
            </div>
        </>
    )
}

export default SearchBar;