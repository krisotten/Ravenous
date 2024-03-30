import React, {useState} from 'react';
import styles from './SearchBar.module.css'

function SearchBar(props) {
    const [filter, setFilter] = useState(null);
    const [search, setSearch] = useState(null);
    const [location, setLocation] = useState(null);

    function handleSearchChange(e) {
        setSearch(e.target.value);
    }

    function handleLocationChange(e) {
        setLocation(e.target.value);
    }
    
    function handleFilterChange(e) {
        var newFilter = e.target.innerHTML;
        newFilter = newFilter.replace(' <br>', '');
        setFilter(newFilter);
    }

    function handleButtonClick(e) {
        console.log(`Searching Yelp with ${search}, ${location}, ${filter}`);
    }

    return (
        <>
            <div className={styles.bar}>
                <p className={styles.ravenous}>ravenous</p>
            </div>
            <div className={styles.searchDiv}>
                <div className={styles.filters}>
                    <p className={filter==='Best Match' ? styles.filterActive : styles.filter} onClick={handleFilterChange} >Best <br /> Match</p>
                    <p className={filter==='Highest Rated' ? styles.filterActive : styles.filter} onClick={handleFilterChange}>Highest <br /> Rated</p>
                    <p className={filter==='Most Reviewed' ? styles.filterActive : styles.filter} onClick={handleFilterChange}>Most <br /> Reviewed</p>
                </div>
                <div className={styles.searchBars}>
                    <input type="text" className={styles.searchBar} placeholder='Search Businesses' onChange={handleSearchChange} value={search}/>
                    <input type="text" className={styles.searchBar} placeholder='Where?' onChange={handleLocationChange} value={location}/>
                </div>
                <button className={styles.button} onClick={handleButtonClick}>Let's Go</button>
            </div>
        </>
    )
}

export default SearchBar;