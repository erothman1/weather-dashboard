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

    var userInputArr = []
    userInputArr.push(inputEl.value.split(","))
    
    var cityName = userInputArr[0][0]
    // var stateName = userInputArr[0][1]
    var countryName = userInputArr[0][2]

    console.log(userInputArr)

    console.log(cityName)
    // console.log(stateName)
    console.log(countryName)

    // if (cityName || cityName&&stateName || cityName&&countryName || cityName&&stateName&&countryName) {
    //     console.log('hello')
    // }

    if (cityName && countryName) {
        getTodayCityWeather(cityName, countryName)
        getForecastCityWeather(cityName, countryName)
        inputEl.value = ""
    } else {
        alert("Please enter a valid city name and country code")
    }


    // var cityName = inputEl.value.trim()

    // if (cityName) {
    //     getTodayCityWeather(cityName)
    //     // getForecastCityWeather(cityName)
    //     //create button elements for city search history
    //     inputEl.value = ""
    // } else {
    //     alert("Please enter a city name")
    // }
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
//TODO: problem:: city name and date not showing up on page but is showing in console
//TODO: need to add icon representation of weather conditions
function displayTodayWeather(city, searchTerm) {

    console.log(searchTerm + " " + dayjs().format("M/D/YYYY"))
    citySearchTerm.textContent = searchTerm + " " + dayjs().format("M/D/YYYY")

    tempKelvin = city.main.temp
    tempImperial = (((tempKelvin-273.15)*1.8)+32).toFixed(2)

    windMeterperSec = city.wind.speed
    windImperial = (windMeterperSec*2.237).toFixed(2)

    tempToday.textContent = "Temp: " + tempImperial + "°F"
    windToday.textContent = "Wind: " + windImperial + " MPH"
    humidityToday.textContent = "Humidity: " + city.main.humidity + "%"

 
}

//Function handles fetching five-day forecast weather data 
//TODO: need different api url for 5-day weather forecast
//TODO: need to convert city name to longitude and latitude with geocoding api
function getForecastCityWeather(city) {

}

//Function to display 5-day forecast on page 
function displayForecastWeather() {

}





//Click events
//TODO: need click event for buttons for each search history 
userFormEl.addEventListener("submit", formSubmitHandler)
