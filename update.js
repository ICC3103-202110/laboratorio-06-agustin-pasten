

function celsiusToFahrenheit(value){
    value = Number(value)
    fahrenheit = value*1.8 +32
    return fahrenheit
}


function celsiusToKelvin(value){
    value = Number(value)
    kelvin = value + 273.15
    return kelvin
}

function fahrenheitToCelsius(value){
    value = Number(value)
    celsius = (value - 32)/1.8
    return celsius
}

function fahrenheitToKelvin(value){
    value = Number(value)
    kelvin = 5*(value - 32)/9 + 273.15
    return kelvin
}

function kelvinToCelsius(value){
    value = Number(value)
    celsius = value - 273.15
    return celsius
}

function kelvinToFahrenheit(value){
    value = Number(value)
    fahrenheit = 9*(value - 273.15)/5 + 32
    return fahrenheit
}

function sameNumber(value){
    value = Number(value)
    return value
}


module.exports = {
    celsiusToFahrenheit,
    celsiusToKelvin,
    fahrenheitToCelsius,
    fahrenheitToKelvin,
    kelvinToCelsius,
    kelvinToFahrenheit,
    sameNumber

}