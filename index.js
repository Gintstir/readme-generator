const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of this project?'
    }

];

// function to write README file
function writeToFile(answers) {
    fs.writeFile('README.md', generateMarkdown(answers), err => {
        if(err) throw new Error(err);

        console.log('Page created! Check out Readme.md in this directory to see it!');
    });
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then(answers => {
    writeToFile(answers)
})

}

// function call to initialize program
init();
    