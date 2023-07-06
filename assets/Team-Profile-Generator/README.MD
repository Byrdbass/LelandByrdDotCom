
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Team-Profile-Generator

## Description
This project Shows Object Oriented Programming within Node.js.  We are also using this assignment to show our first Testing Driven Development.  We used classes and constructors for the first time as well as several node packages. You will want to `npm install` in the terminal once you have cloned the repository, then run the command `node index.js` in the terminal.  This Application will create a HTML document of all the different roles in your team!  You will log name, employee id, email for each employee in your team.  Engineers will be asked to log their github information, and interns will be asked to log their school they are attending.  There is one manager role and will log their office number.  
My motivation for this project was to to showcase the object orientation of node modules and to import methods and data into other files to shorten the lines of code contained within one document.  I also wanted to learn the exciting syntax of Test Driven Development as a way to fool-proof the functions that were exported into the testing code.
This application creates easy way to log information about a team of web-developers in a clean html format.  I learned to use Classes, constructors, module-exports, and Test Driven Development.  It was exciting putting all the pieces together and seeing how larger scale applications are using snippets of data and methods in different directory locations.  I learned quite a lot about how classes work, and how the directory system has different levels of functionality as a extension of the main index.js file.  I also learned quite a bit about functionally looping with `.map` and `.filter` methods from ES6.. 

# Table of Contents
- [Installation](#Installation)
- [Description](#Description)
- [Usage](#Usage)
- [What-I-learned](#What-I-Learned)
- [Tests](#Tests)
- [Screenshot-of-Application](#Screenshot-of-Application)
- [Links](#Links)
- [Questions?](#Questions?)
- [License](#License)


## Installation
In order to install this project you will need to type `npm i` in the terminal, then `node index.js`.

## Usage
This Project is used for Showing the Object Oriented Programming within Node.js.  We are also using this assignment to show our first Testing Driven Development.  We used classes and constructors for the first time as well as several node packages.

## What-I-Learned
I learned to use Classes, constructors, module-exports, and Test Driven Development.  It was exciting putting all the pieces together and seeing how larger scale applications are using snippets of data and methods in different directory locations.  I learned quite a lot about how classes work, and how the directory system has different levels of functionality as a extension of the main index.js file.  I also learned quite a bit about functionally looping with `.map` and `.filter` methods from ES6.
*I finally understood this code by defining it with a variable*

    const getManagers = teamMembers.filter(Manager => Manager.getRole() === "Manager")
    .map(manager => generateManagerHTML(manager))

## Tests
Test this code by type `npm run test` in the terminal

## Screenshot of Application
![gif off node application](images\team-profile-generator-gif.gif)

## Links
[Video Walkthrough of Application](https://drive.google.com/file/d/1F3pFCqa7KTwIOaLw8CuhUXPRz9qdBfgn/view?usp=sharing)

[gitHub Repository](https://github.com/Byrdbass/Team-Profile-Generator)

## Questions?
My gitHub user name is byrdbass, and you may email me at byrdbass@gmail.com for Questions.

## License
MIT
