var APIKey = "ade2c4f2764feb097e5627010f95859c"

var city
var state
var country

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey


var userFormEl = document.getElementById("user-form")

function formSubmitHandler(event) {
    event.preventDefault()

    console.log("hello")
}

userFormEl.addEventListener("submit", formSubmitHandler)