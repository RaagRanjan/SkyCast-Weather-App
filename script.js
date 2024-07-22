// Define an async function to encapsulate your asynchronous code
async function fetchWeather() {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '6acb7ff35cmsh4fb2e6d6b99d243p1a8eabjsnc493e519e00c',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options); // Await here inside the async function
      const result = await response.text(); // Await here inside the async function
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the async function to initiate the fetching process
  fetchWeather();
  