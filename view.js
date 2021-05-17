const figlet = require('figlet')
const chalk = require('chalk')
//const inquirer = require('inquirer')
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




module.exports = {
    getTitle
    
}