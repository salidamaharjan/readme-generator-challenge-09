// TODO: Create a function that returns a license badge based on which license is passed in
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A short, permissive software license. Basically, you can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source.  There are many variations of this license in use.`;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

You can do what you like with the software, as long as you include the required notices. This permissive license contains a patent license from the contributors of the code.`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
${renderLicenseLink(license)}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.content) {
    return content(data);
  } else {
    return withoutContent(data);
  }
}

function content(data) {
  return `## ${data.title}     
${renderLicenseBadge(data.license)}

## Description
* ${data.motivation}
* ${data.purpose}
* ${data.solves}
* ${data.learning}

## Table of Content
1. [Installation](#installation)
2. [Usage](#usage)
3. [Credits](#credits)
4. [License](#license)
5. [Questions](#questions)

## Installation
${data.installation}

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

function withoutContent(data) {
  return `## ${data.title} 

## Description
* ${data.motivation}
* ${data.purpose}
* ${data.solves}
* ${data.learning} 

## Installation
${data.installation} 

## Usage
${data.usage}

## Credits
${data.credits} 

## License
${renderLicenseSection(data.license)}

## Questions

Should you have any question, you can reach me at 

[GitHub](https://github.com/${data.github})

[Email Me](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
