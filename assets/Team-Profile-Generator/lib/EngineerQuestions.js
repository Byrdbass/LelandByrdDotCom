const inquirer = require('inquirer');
const fs = require('fs');

const dataEngineer = [
    {
        type: 'input',
        message: 'What is your Team Members name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your Team Members employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your Team Members email?',
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your Team Member's GitHub profile name?",
        name: 'github',
    }
]  
module.exports = dataEngineer
//BACK TO THE MENU