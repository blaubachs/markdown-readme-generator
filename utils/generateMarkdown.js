function licenses(chosenLicense) {
  switch (chosenLicense) {
    case "Apache 2.0":
      console.log("apache");
      break;
    case "MIT License":
      console.log("mit");
      break;
    case "BSD 2Clause 'Simplified' License":
      console.log("bsd");
      break;
    case "Mozilla Public License":
      console.log("mozilla");
      break;
    case "No License":
      console.log("non");
      break;
    default:
      console.log("something weird happened");
      break;
  }

  return chosenLicense;
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

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

`;
}

module.exports = generateMarkdown;
