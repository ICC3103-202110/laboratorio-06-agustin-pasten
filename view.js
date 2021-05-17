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

//necesito estas lineas para el input
function inputFrom(){
    return inquirer.prompt({
        type: 'list',
        name: 'type grades from',
        message: 'From?',
        choices: ['Celsius','Fahrenheit','Kelvin']
    })
       
}

function inputTo(){
    return inquirer.prompt({
        type: 'list',
        name: 'type grades to',
        message: 'To?',
        choices: ['Celsius','Fahrenheit','Kelvin']
    })
}

//inputFrom()
//inputTo()
module.exports = {
    getTitle,
    inputFrom,
    inputTo
}