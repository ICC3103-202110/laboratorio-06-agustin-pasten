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

function getTable(leftValue, leftUnit, rightValue, rightUnit){
    const table=[{
        'leftValue': leftValue.toString(), 
        'leftUnit': leftUnit.toString(), 
        'rightValue': rightValue.toString(), 
        'rightUnit': rightUnit.toString()
    }]
    return table
}

function yesNoInput(){
    return inquirer.prompt({
        type: 'confirm',
        name: 'input',
        message: 'Left temperature is source?',
        default: 'Yes',
        choices: [
            {
                key: 'Y',
                value: 'Yes'
            },
            {
                key: 'n',
                value: 'No'
            }
        ]
        
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
    getTable,
    yesNoInput,
    newTemperatureInput,
    inputFrom,
    inputTo
}