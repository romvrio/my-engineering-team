const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateCompany = require('./dist/generate-company.js');


function prompt() {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your managers name?'
            },
            {
                type: 'input',
                name: 'ID',
                message: 'What is your ID or badge number?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'what is your email?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your Github Username?'
            }

        ])
}

prompt();