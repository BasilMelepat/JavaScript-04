// Question 1
// Create a function fetchData that returns a Promise. The Promise should resolve with the string "Data fetched successfully" after a delay of 2 seconds. 
// Use setTimeout to simulate the delay. Test your function by calling it and using .then() to log the resolved value to the console.

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched successfully");
      }, 2000);
    });
}
  
// Testing the function
fetchData()
    .then(result => console.log(result)); 
// Output: "Data fetched successfully"





// Question 2
// Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message "Failed to fetch data". 
// Modify your test to handle this rejection using .catch(). 

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) { // Condition to trigger error
                resolve("Data fetched successfully");
            } else {
                reject("Failed to fetch data");
            }
        }, 2000);
    });
}

// Testing the function
fetchData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
// Output: "Failed to fetch data"





// Question 3
// Convert the fetchData function from Question 1 to use async and await instead of .then(). Ensure to handle errors using try and catch

async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Data fetched successfully");
            } else {
                reject("Failed to fetch data");
            }
        }, 2000);
    });
}

// Testing the function
(async () => {
    try {
        const result = await fetchData();
        console.log(result); // if resolved Output: "Data fetched successfully"
    } catch (error) {
        console.error(error); // if rejected Output: "Failed to fetch data" 
    }
})();