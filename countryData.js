// Question 4
// Write a function "getCountryData" that fetches data from the public API "https://restcountries.com/v3.1/all". 
// Parse the JSON response and log the data to the console. Additionally, use DOM manipulation to display the data on the web page. 
// Make sure to handle any errors that might occur during the fetch operation and display an appropriate error message in the div if the fetch fails. (deploy the webpage on github)

async function getCountryData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json(); //JSON response

        console.log('Countries data:', data); //Log data to the console

        const sortedCountries = data
            .sort((a,b) => a.name.common.localeCompare(b.name.common)) //localeCompare method to sort names
            .map(country => `<ul><li> <span class="flag">${country.flag}</span> ${country.name.common} </li></ul>`)
            .join('');

        document.getElementById('countries-list').innerHTML = `${sortedCountries}`; //DOM to display the data

    } catch (error) {
        document.getElementById('countries-list').innerHTML = `Error loading countries`; //Error message if fetch fails
    }
}

getCountryData();