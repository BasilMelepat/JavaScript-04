// Question 4
// Write a function "getCountryData" that fetches data from the public API "https://restcountries.com/v3.1/all". 
// Parse the JSON response and log the data to the console. Additionally, use DOM manipulation to display the data on the web page. 
// Make sure to handle any errors that might occur during the fetch operation and display an appropriate error message in the div if the fetch fails. (deploy the webpage on github)

async function getCountryData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Log data to console
        displayCountryData(data);
    } 
    
    catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('errorMessage').textContent = 'Failed to fetch country data.';
    }
}

function displayCountryData(data) {
    data.sort((a, b) => a.name.common.localeCompare(b.name.common)); // 'localeCompare' method is used for sorting
    const countryDataDiv = document.getElementById('countryData');
    countryDataDiv.innerHTML = ''; // Clear any existing data

    data.forEach(country => {
        const countryDiv = document.createElement('div'); // DOM to display data
        countryDiv.textContent = country.name.common;
        countryDataDiv.appendChild(countryDiv);
    });
}

getCountryData();