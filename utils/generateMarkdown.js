const inquirer = require("inquirer");
const fs = require("fs");
let licenseResult = ``;
let tempArr = [];

function licenses(chosenLicense) {
  switch (chosenLicense) {
    case "Apache 2.0":
      licenseResult = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Please refer to the ${chosenLicense} for licensing information.`;
      break;
    case "MIT License":
      licenseResult = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Please refer to the ${chosenLicense} for licensing information.`;
      break;
    case "BSD 2Clause 'Simplified' License":
      licenseResult = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

Please refer to the ${chosenLicense} for licensing information.`;
      break;
    case "Mozilla Public License":
      licenseResult = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

Please refer to the ${chosenLicense} for licensing information.`;
      break;
    case "No License":
      licenseResult = `Not licensed.`;
      break;
    default:
      console.log("something weird happened");
      break;
  }

  return licenseResult;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.userContact == "") {
    data.userContact = "No contact information provided.";
  }
  return `# ${data.titleOfProject}

## Description

${data.description}

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
- [Features](#features)

## Installation

${data.installationInstructions}

## Usage

${data.usageInstructions}

## License

${licenses(data.licenseChosen)}

## Contribute

${data.contributionInstructions}

## Tests

${data.testInstructions}

## Questions

Github: [${data.githubProfile}](https://github.com/${data.githubProfile})

Contact: ${data.userContact}

---

`;
}

function extraFeatures() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message:
          "Would you like to create features in a list? If not, the next prompt will only have you enter in a sentence with no additional formatting.",
        name: "createListBoolean",
      },
    ])
    .then(({ createListBoolean }) => {
      if (createListBoolean) {
        inquirer
          .prompt([
            {
              type: "input",
              message:
                "Please enter the extra features you would like to add to your README, separated by dashes, for example, 'one- two- three', the final item should not have a dash.",
              name: "listItems",
            },
          ])
          .then((inputtedFeatures) => createList(inputtedFeatures))
          .then((data) => appendExtraFeatures(data))
          .then((thing) => console.log(thing));
      } else {
        inquirer
          .prompt([
            {
              type: "input",
              message:
                "Please enter the extra feature you would like to add to the features section.",
              name: "onlySentence",
            },
          ])
          .then((onlySentence) => appendExtraFeatures(onlySentence));
      }
    });
}

function createList(featureList) {
  console.log(featureList);
  let listArr = featureList.listItems.split("-");
  console.log(listArr);
  if (listArr.length != 0) {
    for (i = 0; i < listArr.length; i++) {
      tempArr.push(`- ${listArr[i]}\n`);
    }
  } else {
    return;
  }
  return tempArr.join("");
}

function appendExtraFeatures(data) {
  return `## Features

${data}

  `;
}

module.exports = {
  generateMarkdown,
  extraFeatures,
  appendExtraFeatures,
};
