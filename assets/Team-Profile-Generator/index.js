//getName function, getRole function
//requires subclasses, path, html(generator)

const ManagerQuestions = require('./lib/ManagerQuestions');
const EngineerQuestions = require('./lib/EngineerQuestions');
const InternQuestions = require('./lib/InternQuestions');
const EmployeeQuestions = require('./lib/EmployeeQuestions')
const Manager = require('./lib/Manager');
const menuQuestions = require('./lib/menuQuestions')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee')
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const dataEngineer = require('./lib/EngineerQuestions');
const dataIntern = require('./lib/InternQuestions');

// const DIST_DIR = path.resolve(__dirname, 'dist');
// const distPath = path.join(DIST_DIR, 'team.html');

const generateHTML = require('./src/page-template');

const teamMembers = [];
// const managerArray = [];
// const engineerArray = [];
// const internArray = [];

//gets name for Employees that are interns and Engineers

//runs the program starting with manager
inquirer
    .prompt(ManagerQuestions)
    .then((dataManager) => {
        //console.log(dataManager.name, dataManager.id, dataManager.email, dataManager.officeNum)
        const manager1 = new Manager(dataManager.name, dataManager.id, dataManager.email, dataManager.officeNum); 
        teamMembers.push(manager1);
        //managerArray.push(manager1)
        menu();
    });

    const menu = () => {
        inquirer.prompt(menuQuestions)
        .then(choice => {console.log(choice)
        if (choice.choice === 'Engineer') {
            inquirer.prompt(EngineerQuestions)
            .then(dataEngineer => {
                const engineer1 = new Engineer(dataEngineer.name, dataEngineer.id, dataEngineer.email, dataEngineer.github);
                teamMembers.push(engineer1);
                //engineerArray.push(engineer1);
                menu();
            }) 
        } else
        if (choice.choice === 'Intern') {
            inquirer.prompt(InternQuestions)
            .then(dataIntern => {
                const intern1 = new Intern(dataIntern.name, dataIntern.id, dataIntern.email, dataIntern.school)
                teamMembers.push(intern1);
                //internArray.push(intern1);
                menu()
            })
        } else {//console.log(teamMembers)
            //this will take the data and populate the HTML document
        var template = generateHTML(teamMembers);
        //console.log(template)
        fs.writeFile('index.html', template, (err) => 
        err? console.log(err) : console.log('response written to file'));
        }
        return;
        })
    }


