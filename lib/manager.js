
function managerPrompt() {

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
                message: 'What is your Office Number??'
            }

        ])
};

modules.export = managerPrompt;