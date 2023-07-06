// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown') 

// TODO: Create an array of questions for user input
const data = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the Project called?',
        name: 'projName',
    },
    {
        type: 'input',
        message: 'What is the Project Used for?',
        name: 'projUse',
    },
    {
        type: 'input',
        message: 'How do you use this application?',
        name: 'projHow'
    },
    {
        type: 'input',
        message: 'what was your motivation for this project?',
        name: 'motivation'
    },
    {
        type: 'input',
        message: 'what problem does this project solve?',
        name: 'problem',
    },
    {
        type: 'input',
        message: 'what did you learn?',
        name: 'learn',
    },
    {
        type: 'input',
        message: 'How do you install this application?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How do you test this application?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'How should the user report issues?',
        name: 'issues',
    },
    {
        type: 'input',
        message: 'What is the alt text of the App Screenshot?',
        name: 'imageAlt',
    },
    {
        type: 'input',
        message: 'What is the source of the ScreenShot?',
        name: 'imageSrc',
    },
    {
        type: 'input',
        message: 'what is the name of the link?',
        name: 'linkName',
    },
    {
        type: 'input',
        message: 'what is the address of the link?',
        name: 'linkAddress',
    },
    {
        type: 'input',
        message: 'How can the user make Contributions to this app?',
        name: 'contribution'
    },
    {
        type: 'list',
        message: 'Choose one of the following licenses',
        name: 'license',
        choices: ['no license', 'MIT', 'ISC', 'Apache 2.0', '2-clause BSD', 'MPL 2.0']
    },
    
];

// TODO: Create a function to write README file
inquirer
    .prompt(data)
    .then((response) =>{
    console.log(data)
    fs.writeFileSync('README.MD', generateREADME(response), (err) => 
    err? console.log(err) : console.log('response written to file') );
})