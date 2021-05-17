const {getTitle,inputFrom,inputTo} = require("./view")
//const {} = require("./update")



async function app(){
    console.clear();
    console.log(getTitle());
    await inputFrom()
    await inputTo()
}

app()