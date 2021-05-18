const {getTitle,inputFrom,inputTo,yesNoInput, newTemperatureInput,getTable} = require("./view")
const {celsiusToFahrenheit,celsiusToKelvin, kelvinToCelsius, kelvinToFahrenheit,
    fahrenheitToCelsius,fahrenheitToKelvin,sameNumber} = require("./update")
const { printTable } = require('console-table-printer');


async function app(leftValue,leftUnit,rightValue,rightUnit){
    console.clear();
    console.log(getTitle());
    //asi se puede usar los valores de la preguntas en inquerer, creando un objeto
    printTable(getTable(leftValue,leftUnit,rightValue,rightUnit))
    let c = await yesNoInput()
    yesNo = c.input
    console.log(yesNo)

    if (yesNo ===true)
        d = await newTemperatureInput(leftValue)
    else
        d = await newTemperatureInput(rightValue)
    newTemperature = d.input
    console.log(newTemperature)
    
    let a = await inputFrom()
    fromSelect = a.from
    console.log(fromSelect)

    let b = await inputTo()
    toSelect = b.to
    console.log(toSelect)

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
    
    console.log(newGrade)
    
}

app(0,"Celsius",32,'Fahrenheit')