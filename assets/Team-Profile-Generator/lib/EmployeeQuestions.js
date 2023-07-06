const inquirer = require('inquirer');
const fs = require('fs');

//applies to all manager, engineer, and intern!

const dataEmployee = [
    {
        type: 'input',
        message: 'What is your Team Members name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your Team Members employee ID?',
        name: 'empId',
    },
    {
        type: 'input',
        message: 'What is your Team Members email?',
        name: 'email',
    }
]
module.exports = dataEmployee