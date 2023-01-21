const inquirer = require("inquirer");
const fs = require("fs");
let licenseResult = ``;

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
  return `# ${data.titleOfProject}

## Description

${data.description}

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#Contribute)
- [Tests](#tests)
- [Questions](#questions)

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
    .then(({ createListBoolean }) =>
      createListBoolean ? console.log("trube") : console.log("not troob")
    );
}

function appendExtraFeatures(data) {
  return `## Features



  `;
}

module.exports = {
  generateMarkdown,
  extraFeatures,
  appendExtraFeatures,
};
