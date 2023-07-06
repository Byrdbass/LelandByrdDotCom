const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
//create & call functions for each role's card
const generateManagerHTML = (manager) => {
    return `<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-header">${manager.name} , Manager \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0<img src="images/cup-fill.svg"></div>
    <div class="card-body">
      <h5 class="card-title"><i class="bi bi-eyeglasses"></i>ID #${manager.id}</h5>
      <p class="card-text">Email: <a href="mailto: ${manager.email}" target="_blank">${manager.email}</a></p>
      <p class="card-text">Office Number: ${manager.officeNum}</p>
    </div>
    </div>`
}

//put a link element in here for email of all three cards
//put a link element in here for gitHub to open in new tab
const generateEngineerHTML = (engineer) => {
  return `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">${engineer.name} , Engineer \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0<img src="images/eyeglasses.svg"></div>
  <div class="card-body">
    <h5 class="card-title">ID #${engineer.id}</h5>
    <p class="card-text">Email: <a href="mailto: ${engineer.email}" target="_blank">${engineer.email}</a></p>
    <p class="card-text">gitHub: <a href="https://github.com/${engineer.github}" target="_blank"> ${engineer.github}</a></p>
  </div>
  </div>`
}

const generateInternHTML = (intern) => {
  return `<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
  <div class="card-header">${intern.name} , Intern \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0<img src="images/book.svg"></div>
  <div class="card-body">
    <h5 class="card-title">ID #${intern.id}</h5>
    <p class="card-text">Email: <a href="mailto:${intern.email}" target="_blank">${intern.email}</a></p>
    <p class="card-text">School attending: ${intern.school}</p>
  </div>
  </div>`
}


const generateHTML = (teamMembers) => {

  const getManagers = teamMembers.filter(Manager => Manager.getRole() === "Manager")
  .map(manager => generateManagerHTML(manager))

  const getEngineers = teamMembers.filter(Engineer => Engineer.getRole() === "Engineer")
  .map(engineer => generateEngineerHTML(engineer))

  const getInterns = teamMembers.filter(Intern => Intern.getRole() === "Intern")
  .map(intern => generateInternHTML(intern))


console.log(getEngineers)

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
        <h1 class="display-4 text-center">Team Profile!</h1>
        </div>
        <div class="container">
        <div class="row row-cols-6">
        <div class= "my-2 mx-3">${getManagers} </div>
        <div class="my-2 mx-3">${getEngineers} </div>
        <div class="my-2 mx-3">${getInterns} </div>
        </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </body>
    </html>`
}

module.exports = generateHTML;