const inquirer = require('inquirer');
const fs = require('fs');

const menuData = [
{
    type: 'list',
    message: 'Is your Next Team Member an Engineer, or Intern?',
    name: 'choice',
    choices: ['Engineer', 'Intern', 'neither, done with data Entry']
}
];

module.exports = menuData;