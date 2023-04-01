var APIKey = "ade2c4f2764feb097e5627010f95859c"

var city
var state
var country

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey


var userFormEl = document.getElementById("user-form")
var inputEl = document.getElementById("city-name")

function formSubmitHandler(event) {
    event.preventDefault()

    var cityName = inputEl.value.trim()

    if (cityName) {
        getCityWeather(cityName)
        inputEl.value = ""
    } else {
        alert("Please enter a city name")
    }
}

function getCityWeather(city) {
    
}






//Click events
userFormEl.addEventListener("submit", formSubmitHandler)