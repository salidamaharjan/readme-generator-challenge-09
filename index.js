// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//importing the generateMarkdown using require giving a relative path
const generateMarkdown = require("./utils/generateMarkdown");

//Array of questions for user input
const questions = [
  {
    name: "title",
    message: "What is the name of project?",
  },
  {
    name: "motivation",
    message: "What is your motivation for this project?",
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
    name: "run",
    message: "How to run your project",
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
    choices: ["Apache", "MIT", "None"],
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

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Added to ${fileName}`);
  });
}

// Function to initialize app
async function init() {
  //using prompt method of inquirer package to ask the series of question
  const ask = await inquirer.prompt(questions);
  // console.log(generateMarkdown(ask));
  //saving the user answer to README.md
  writeToFile("README.md", generateMarkdown(ask));
}

// Function called to initialize app
init();

