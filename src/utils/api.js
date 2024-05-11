const api_key = 'WIViuH6d7-yYfnfT8Nwn2G7hoNFCFKOS-ycvgSnaCy8QQhs3uFOuEkAgCkURXZZ98jf1nCu-D0y8glC_6LPXp4_gwYzvK1W0cb70a0DvqIJs5PcdWBw-MYyHTZo_ZnYx';
const base_url = 'https://api.yelp.com/v3';

function yelpSearch(term, location, option) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endPoint = '/businesses/search';
    const queryParams = `?location=${location}&term=${term}&sort_by=${option}&limit=5`;
    const url = cors + base_url + endPoint + queryParams;
    
    fetch(url, {headers:{Authorization: `Bearer ${api_key}`}}).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed');
    }).then(jsonResponse => {
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => ({
                id: business.id,
                img: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zip: business.location.zip_code,
                type: business.categories[0].title,
                rating: business.rating,
                reviews: business.review_count
            }));
        } 
    });
}

export default yelpSearch;