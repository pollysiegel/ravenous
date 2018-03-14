const apiKey = 'CbY3qJJE8v_Wp_Ajwas3EiDWJBAs-QIh8UoAJfiWjqeSK0dkOZQnn_W-bg7vECVDy_LEhbKcM7zCyHGHMn8ehOXWQuf_B_69-2bYFPixx63qzBO1J-ujMcfchXqoWnYx';

export const Yelp = {
    search(term, location, sortBy) {
        const fetchURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=' + term + '&location=' + location + '&sort_by=' + sortBy;
        return fetch(fetchURL, { headers:
                        { Authorization: `Bearer ${apiKey}` }
                    }
                ).then(response =>  {
                    return response.json();
                }).then(jsonResponse => {
                    if (jsonResponse.businesses) {
                        return jsonResponse.businesses.map(business => ({
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        })); /* return all of them */
                    }
                 });
    }
}
