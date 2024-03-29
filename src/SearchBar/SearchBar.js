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
                    <p className={styles.filter}>Best <br /> Match</p>
                    <p className={styles.filter}>Highest <br /> Rated</p>
                    <p className={styles.filter}>Most <br /> Reviewed</p>
                </div>
                <div className={styles.searchBars}>
                    <input type="text" className={styles.searchBar} placeholder='Search Businesses'/>
                    <input type="text" className={styles.searchBar} placeholder='Where?'/>
                </div>
                <button className={styles.button}>Let's Go</button>
            </div>
        </>
    )
}

export default SearchBar;