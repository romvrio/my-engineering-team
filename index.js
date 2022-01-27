const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateCompany = require('./dist/generate-company.js');


function prompt() {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'test',
                message: 'This is a test prompt'
            }

        ])
}

prompt();