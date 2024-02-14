async function getLocationKey(cityName, country) {
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apiKey=${apiKey}&q=${encodeURIComponent(cityName)},${encodeURIComponent(country)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.length > 0) {
            return data[0].Key; // Return the location key for the first matching city
        } else {
            return null; // City not found or no data returned
        }
    } catch (error) {
        console.error('Error fetching location key:', error);
        return null;
    }
}

async function findLocationKey() {
    const cityName = 'Islamabad';
    const country = 'Pakistan';
    const locationKey = await getLocationKey(cityName, country);
    if (locationKey) {
        console.log(`Location key for ${cityName}: ${locationKey}`);
    } else {
        console.log('City not found or error occurred.');
    }
}

findLocationKey();
