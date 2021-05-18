const {getTitle,inputFrom,inputTo,yesNoInput, newTemperatureInput,getTable} = require("./view")
const {celsiusToFahrenheit,celsiusToKelvin, kelvinToCelsius, kelvinToFahrenheit,
    fahrenheitToCelsius,fahrenheitToKelvin,sameNumber} = require("./update")
const { printTable } = require('console-table-printer');


async function app(leftValue,leftUnit,rightValue,rightUnit){
    console.clear();
    console.log(getTitle());
    
    printTable(getTable(leftValue,leftUnit,rightValue,rightUnit))
    let c = await yesNoInput()
    yesNo = c.input
    

    if (yesNo ===true)
        d = await newTemperatureInput(leftValue)
    else
        d = await newTemperatureInput(rightValue)
    newTemperature = d.input
    
    
    let a = await inputFrom()
    fromSelect = a.from
    

    let b = await inputTo()
    toSelect = b.to
    

    let newGrade = sameNumber(newTemperature)

    if (fromSelect ==="Celsius"){
        if (toSelect ==="Celsius")
            newGrade = sameNumber(newTemperature)
        if (toSelect ==="Fahrenheit")
            newGrade = celsiusToFahrenheit(newTemperature)
        if (toSelect ==="Kelvin")
            newGrade = celsiusToKelvin(newTemperature)
    }

    if (fromSelect ==="Fahrenheit"){
        if (toSelect ==="Celsius")
            newGrade = fahrenheitToCelsius(newTemperature)
        if (toSelect ==="Fahrenheit")
            newGrade = sameNumber(newTemperature)
        if (toSelect ==="Kelvin")
            newGrade = fahrenheitToKelvin(newTemperature)
    }

    if (fromSelect === "Kelvin"){
        if (toSelect ==="Celsius")
            newGrade = kelvinToCelsius(newTemperature)
        if (toSelect ==="Fahrenheit")
            newGrade = kelvinToFahrenheit(newTemperature)
        if (toSelect ==="Kelvin")
            newGrade = sameNumber(newTemperature)
    }
    

    if (yesNo ===true)
        app(newTemperature,fromSelect,newGrade,toSelect)
    if (yesNo ===false)
        app(newGrade,toSelect,newTemperature,fromSelect)
}

app(0,"Celsius",32,'Fahrenheit')