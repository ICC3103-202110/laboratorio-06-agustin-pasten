const {getTitle,inputFrom,inputTo,yesNoInput, newTemperatureInput} = require("./view")
//const {} = require("./update")



async function app(){
    console.clear();
    console.log(getTitle());
    //asi se puede usar los valores de la preguntas en inquerer, creando un objeto
    
    let c = await yesNoInput()
    yesNo = c.input
    console.log(yesNo)

    let d = await newTemperatureInput()
    newTemperature = d.input
    console.log(newTemperature)
    
    let a = await inputFrom()
    fromSelect = a.from
    console.log(fromSelect)

    let b = await inputTo()
    toSelect = b.to
    console.log(toSelect)
}

app()