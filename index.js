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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
