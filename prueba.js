const inquirer = require('inquirer')

/*
inquirer.prompt({
    name: 'color',
    message: 'What is your favorite color?',
    default: 'red'
})
    .then(answers => {
        console.log("Answer: ", answers)
    })
*/

//en esta parte se crearon 3 objetos, se hace en una lista

inquirer.prompt([{
    name: 'color',
    message: 'What is your favorite color?',
    default: 'red'
},{
    name: 'website',
    message: 'What is your favorite website'

},{
    name: 'gus', 
    message: 'Como estas gus?'

}])
    .then(answers => {
        console.log("Answer: ", answers)
    })



/*
inquirer.prompt({
    type: 'list',
    name: 'colors',
    message: 'Which are your favorite color?',
    choices: ['red','blue','green']
})
    .then(answers => {
        console.log("Answer: ", answers)
    })
*/

//otra forma de hacerlo es esta
/*
inquirer.prompt({
    type: 'rawlist',
    name: 'colors',
    message: 'Which are your favorite color?',
    choices: ['red','blue','green']
})
    .then(answers => {
        console.log("Answer: ", answers)
    })
*/


/*
inquirer.prompt({
    type: 'expand',
    name: 'colors',
    message: 'Which are your favorite color?',
    choices: [
        {
            key: 'a',
            value: 'red'
        },
        {
            key: 'b',
            value: 'blue'
        }
    ]
})
    .then(answers => {
        console.log("Answer: ", answers)
    })

*/