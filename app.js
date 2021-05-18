const {getTitle,inputFrom,inputTo,yesNoInput, newTemperatureInput,getTable} = require("./view")
//const {} = require("./update")
const { printTable } = require('console-table-printer');


async function app(leftValue,leftUnit,rightValue,rightUnit){
    console.clear();
    console.log(getTitle());
    //asi se puede usar los valores de la preguntas en inquerer, creando un objeto
    printTable(getTable(leftValue,leftUnit,rightValue,rightUnit))
    let c = await yesNoInput()
    yesNo = c.input
    console.log(yesNo)

    let d = await newTemperatureInput(0)
    newTemperature = d.input
    console.log(newTemperature)
    
    let a = await inputFrom()
    fromSelect = a.from
    console.log(fromSelect)

    let b = await inputTo()
    toSelect = b.to
    console.log(toSelect)
}

app(0,"Celsius",32,'Fahrenheit')