// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    message: "What is the name of project?",
  },
  {
    name: "motivation",
    message: "What is your motivation for this project?"
  },
  {
    name: "purpose",
    message: "Why did you build this project?",
  },
  {
    name: "solves",
    message: "What problem does it solves?",
  },
  {
    name: "learning",
    message: "What did you learn?",
  },
  {
    name: "content",
    type: "confirm",
    message: "Do you want to add table of content?",
  },
  {
    name: "installation",
    message: "Installation Guide for your app",
  },
  {
    name: "usage",
    message: "Usage for your app",
  },
  {
    name: "credits",
    message: "Credits to add",
  },
  {
    name: "license",
    type: "list",
    message: "License to add",
    choices: ["Apache", "MIT"],
  },
  {
    name: "github",
    message: "Enter your GitHub username to add",
  },
  {
    name: "email",
    message: "Enter email id to add as a contact",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log(`Added to ${fileName}`);
    })
}

// TODO: Create a function to initialize app
async function init() {
    const ask = await inquirer.prompt(
        questions
    );
    writeToFile("readme.md", `## ${ask.title}

## Description
* ${ask.motivation}
* ${ask.purpose}
* ${ask.solves}
* ${ask.learning}

`);
}

// Function call to initialize app
init();
