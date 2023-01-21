const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
let minimumCompletedFlag = false;

console.log(generateMarkdown);

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

    // fs.writeFile(
    //   "./generated-readme/README.md",
    //   generateMarkdown(userInput),
    //   (err) =>
    //     err
    //       ? console.log("An error occured")
    //       : console.log(
    //           "Your README is generated! Please check the directory '/generated-readme' to view."
    //         )
    // );
    return (minimumCompletedFlag = true);
  })
  .then((flag) =>
    flag
      ? inquirer.prompt([
          {
            type: "confirm",
            message:
              "Would you like to list any extra features for your application?",
            name: "featureBoolean",
          },
        ])
      : console.log("An error occured.")
  )
  .then((confirm) =>
    confirm.featureBoolean
      ? generateMarkdown.extraFeatures()
      : console.log(
          "You have completed the minimum steps required for your professional README. Remember to check the directory, '/generated-readme' to view."
        )
  );
