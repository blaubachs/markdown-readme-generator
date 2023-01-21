const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
let userArr;

console.log(generateMarkdown);

// we need to also use list for a license section, and probably break apart the object of this to assign a variable for the badges.
// we need to create a table of contents
//  this needs to link to each section respectively.
// we need to create a questions section
//  questions section should link to github profile entered
//  email address should go into the sections area as well with instructions on how to reach with additional questions.

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "titleOfProject",
    },
    {
      type: "input",
      message: "Enter a short description of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Enter required installation instructions for your application.",
      name: "installationInstructions",
    },
    {
      type: "input",
      message: "Enter usage instructions for your application.",
      name: "usageInstructions",
    },
    {
      type: "input",
      message: "Enter contribution guidelines for your application.",
      name: "contributionInstructions",
    },
    {
      type: "list",
      message: "Please pick a license.",
      choices: [
        "Apache 2.0",
        "MIT License",
        "BSD 2Clause 'Simplified' License",
        "Mozilla Public License",
        "No License",
      ],
      name: "licenseChosen",
    },
    {
      type: "input",
      message: "Enter any tests for your application.",
      name: "testInstructions",
    },
  ])
  .then((userInput) => {
    console.log(userInput);
    console.log(generateMarkdown(userInput));
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
