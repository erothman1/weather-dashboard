var APIKey = "ade2c4f2764feb097e5627010f95859c"

// var city
// var state
// var country

var userFormEl = document.getElementById("user-form")
var inputEl = document.getElementById("city-name")
var citySearchTerm = document.getElementById("city-name")
var tempToday = document.getElementById("temp-today")
var windToday = document.getElementById("wind-today")
var humidityToday = document.getElementById("humidity-today")

//Function handles form submission
function formSubmitHandler(event) {
    event.preventDefault()

    var cityName = inputEl.value.trim()

    if (cityName) {
        getTodayCityWeather(cityName)
        // getForecastCityWeather(cityName)
        //create button elements for city search history
        inputEl.value = ""
    } else {
        alert("Please enter a city name")
    }
}

//Function handles fetching weather data for today's weather
function getTodayCityWeather(city) {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey

    fetch(queryURL)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    displayTodayWeather(data, city)
                    console.log(response)
                    console.log(data)
                })
            } else {
                alert("Error " + response.statusText)
            }
        })
        .catch(function(error) {
            alert("Unable to connect to Weather API")
        })
}

//Function to display today's weather on page
function displayTodayWeather(city, searchTerm) {

    console.log(searchTerm)
    //PROBLEM: city name not showing up on page 
    citySearchTerm.textContent = searchTerm

    tempToday.textContent = "Temp: " + city.main.temp
    windToday.textContent = "Wind: " + city.wind.speed
    humidityToday.textContent = "Humidity: " + city.main.humidity


}

//Function handles fetching five-day forecast weather data 
function getForecastCityWeather(city) {
    //need different api url for 5-day weather forecast
    //need to convert city name to longitude and latitude 
}

//Function to display 5-day forecast on page 
function displayForecastWeather() {

}





//Click events
//need click event for buttons for each search history 
userFormEl.addEventListener("submit", formSubmitHandler)
