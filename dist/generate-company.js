const Employee = require("../lib/Employee");
const engineerCard = require("../dist/Engineer-card");
const internCard = require("../dist/Intern-card");
const managerCard = require("../dist/Manager-card");

function generateCompany(answers) {
    console.log(answers)
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
    <!-- MAIN -->
    <div class="text-center fs-4">
        <span class="d-block p-4 mb-5 bg-primary text-white">My Engineering Team</span>
    <div>
        
    </body>
    </html>`
}

module.exports = generateCompany;