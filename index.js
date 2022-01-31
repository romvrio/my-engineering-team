const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateCompany = require('./dist/generate-company.js');

/* Using Inquirer Try to give the user "choices" on what type of
(worker) they are...then use the promise .then method to get them to 
answer the prompts on the worker that they chose.*/
function employeePrompt() {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your ID or badge number?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'what is your email?'
            },

        ])

}

