const Employee = require("../lib/Employee");

function generateCompany(data) {
    console.log(data)
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1> ${data.name} </h1>
        <h2> ${data.id} </h2>
    </body>
    </html>`
}

module.exports = generateCompany;