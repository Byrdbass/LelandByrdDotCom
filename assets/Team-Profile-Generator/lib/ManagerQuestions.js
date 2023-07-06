const inquirer = require('inquirer');
const fs = require('fs');

const dataManager = [
    {
        type: 'input',
        message: "What is The Manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is your Manager's employee ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the manager's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the Manager's office number?",
        name: 'officeNum',
    },
    //HOW DO I PROMPT THIS NEXT QUESTION BASED OFF YES??
]
 //this needs to jump to the data from other files depending on what they pick

module.exports = dataManager;