






// ASYNC AND AWAIT

// async function fetchWeatherData() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchWeatherData(); // Call the async function








///////================================================================================>>>

/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/



/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
  //HINT: Use template literals to create a url with input and an API key
  /// API 



const url = `https://open-weather13.p.rapidapi.com/city/${city}/%7Blang%7D`; // Replace 'en' with the desired language code
const options =  {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '66dba53188msh4bb231a2533362dp12ec35jsn52e764499db0',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

// FETCH
return fetch(url,options)
.then(response => response.json())
.then(data => data)
.catch(err => console.log(err))

  //CODE GOES HERE
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  const data =await getWeatherData(city)
  showWeatherData(data)
  // CODE GOES HERE

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  // console.log(weatherData,"aaaa")
  document.getElementById('temp').innerText = weatherData.main.temp
  document.getElementById('city-name').innerText = weatherData.name
  document.getElementById('weather-type').innerText = weatherData.weather[0].main
  document.getElementById('min-temp').innerText = weatherData.main.temp_min
  document.getElementById('max-temp').innerText = weatherData.main.temp_max
}

