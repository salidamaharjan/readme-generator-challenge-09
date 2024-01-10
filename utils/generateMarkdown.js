// Function created that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return "";
  }
}

// Function created that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `${renderLicenseBadge(license)}

A short, permissive software license. Basically, you can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source. There are many variations of this license in use.`;
  } else if (license === "Apache") {
    return `${renderLicenseBadge(license)}

You can do what you like with the software, as long as you include the required notices. This permissive license contains a patent license from the contributors of the code.`;
  } else {
    return "";
  }
}

// Function created that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
${renderLicenseLink(license)}`;
  } else {
    return "";
  }
}

// Function created to generate markdown for README
function generateMarkdown(data) {
  return readme(data);
}

// The user answers are formatted using markdown syntax
function readme(data) {
  return `## ${data.title}     
${renderLicenseBadge(data.license)}

## Description
* ${data.motivation}
* ${data.purpose}
* ${data.solves}
* ${data.learning}

${tableOfContent(data)}

## Installation
${data.installation}

## Run
${data.run}

## Usage
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}

## Questions

Should you have any question, you can reach me at 

[GitHub](https://github.com/${data.github})

[Email Me](mailto:${data.email})
`;
}

//creating a function to return table of content oor and empty string
function tableOfContent(data) {
  if (data.content) {
    return `## Table of Content
1. [Installation](#installation)
2. [Run](#run)
3. [Usage](#usage)
4. [Credits](#credits)
5. [License](#license)
6. [Questions](#questions)`;
  }
  return "";
}

//export is necessary to be able to import and access this file
module.exports = generateMarkdown;
