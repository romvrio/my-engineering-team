const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateCompany = require('./dist/generate-company');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const console = require('console');

const answers = [];

//When I recive data back console.log data object and pass it into answers array.

const employeePrompt = (data) => {

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
        ]).then(data => {
            if (data.role) {
                answers.push(data)
                chooseRoles(data.role);
            }
        })
}

const chooseRoles = (data) => {
    switch (data) {
        case 'Manager':
            managerPrompt()
            break;
        case 'Engineer':
            engineerPrompt()
            break;
        case 'Intern':
            internPrompt()
            break;
    };
}

const confirmationPrompt = () => {
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
                employeePrompt()
            }
        })
}

// MANAGER
const managerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'office',
                message: 'What is your office number?'

            }
        ]).then(data => {
            answers.push(data);
            confirmationPrompt();
        })
}

//ENGINEER
const engineerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?'

            }
        ]).then(data => {
            answers.push(data);
            confirmationPrompt();
        })
}

//INTERN
const internPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: 'What is the name your school?'

            }
        ]).then(data => {
            answers.push(data);
            confirmationPrompt();
        })
}

const writeToFile = () => {

    const companyHtmlData = generateCompany(answers);

    fs.writeFile('./index.html', companyHtmlData, err => {
        if (err) throw new Error(err);

        console.log('Your company roles are completed! Check it out in the index.html to see the output!')
    });
}

const init = () => {
    employeePrompt()
        .then(data => { chooseRoles(data) })
}


init();
