const Employee = require("../lib/Employee");

const managerCard = () => {
    return `<div class="card text-center" style="width: 24rem;">
    <div class="card-header">
      Name: ${answers.Name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${answers.id}</li>
      <li class="list-group-item">Email: ${answers.email}</li>
      <li class="list-group-item">Office Number: ${answers.office}</li>
    </ul>
  </div>`
}

module.exports = managerCard;