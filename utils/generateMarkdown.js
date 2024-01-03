// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.content) {
    return `## ${data.title}
## Description* ${data.motivation}* ${data.purpose}* ${data.solves}* ${data.learning}
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
## License
${data.license}
## Questions
You can reach me at

${data.github}
${data.email}
`;
  } else {
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
${data.license}
  
## Questions
You can reach me at
  
${data.github}
${data.email}
`;
  }
}

module.exports = generateMarkdown;
