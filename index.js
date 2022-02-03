const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateCompany = require('./dist/generate-company.js');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const console = require('console');
const answers = []

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
            {
                type: 'list',
                name: 'role',
                message: 'What is your role in the company?',
                choices: ['Manager', 'Engineer', 'Intern']
            }
        ]);
}

function confirmationPrompt() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'validation',
                message: 'Are you finished adding team members?',
                choices: ["Yes", "No"]
            }

        ]).then(data => {
            if (data.validation === "Yes") {
                writeToFile();
            } else {
                employeePrompt();
            }
        })
}

function managerPrompt() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'office',
                message: 'What is your office number?'

            }
        ]).then(data => {
            console.log("61", data);
            confirmationPrompt();
        })
}
function engineerPrompt() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?'

            }
        ]).then(data => {
            console.log(data);
            confirmationPrompt();
        })
}

function internPrompt() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: 'What is the name your school?'

            }
        ]).then(data => {
            console.log(data);
            confirmationPrompt();
        })
}

employeePrompt()
    // Add the data to an empty array of employees, use that data from each emplyee to do so
    .then(data => {
        console.log("108", data);
        switch (data.role) {
            case 'Manager':
                managerPrompt()
                break;
            case 'Engineer':
                engineerPrompt()
                break;
            case 'Intern':
                internPrompt()
                break;
        }
    });

function writeToFile() {
    const companyHtmlData = generateCompany(data);

    fs.writeFile('./index.html', companyHtmlData, err => {
        if (err) throw new Error(err);

        console.log('Your company roles are completed! Check it out in the index.html to see the output!')
    });
}

