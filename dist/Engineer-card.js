const Employee = require("../lib/Employee");

const engineerCard = () => {
    return `<div class="card text-center" style="width: 24rem;">
    <div class="card-header">
      Name: ${answers.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${answers.id}</li>
      <li class="list-group-item">Email: ${answers.email}</li>
      <li class="list-group-item">GitHub: ${answers.github}</li>
    </ul>
  </div>`
}

module.exports = engineerCard;