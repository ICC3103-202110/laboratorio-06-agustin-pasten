const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const { printTable } = require('console-table-printer');
const prompt = require('prompt-sync')();


function getTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

//'Temperature value to convert?'

function yesNoInput(){
    return inquirer.prompt({
        name: 'input',
        message: 'Left temperature is source?',
        default: 'Y/n'
    })
}

function newTemperatureInput(value){
    return inquirer.prompt({
        name: 'input',
        message: 'Temperature value to convert?',
        default: value
    })
}

//necesito estas lineas para el input
function inputFrom(){
    return inquirer.prompt({
        type: 'list',
        name: 'from',
        message: 'From?',
        choices: ['Celsius','Fahrenheit','Kelvin']
    })
       
}

function inputTo(){
    return inquirer.prompt({
        type: 'list',
        name: 'to',
        message: 'To?',
        choices: ['Celsius','Fahrenheit','Kelvin']
    })
}

//inputFrom()
//inputTo()
//newTemperatureInput(0)
//yesNoInput()
module.exports = {
    getTitle,
    yesNoInput,
    newTemperatureInput,
    inputFrom,
    inputTo
}