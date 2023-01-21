function licenses(chosenLicenese) {
  console.log("ye");
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
- [How to Contribute](#How to Contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installationInstructions}

## Usage

${data.usageInstructions}

## License

${licenses(data.licenseChosen)}

## How to Contribute

${data.contributionsInstructions}

## Tests

${data.testInstructions}

## Questions



---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

`;
}

module.exports = generateMarkdown;
