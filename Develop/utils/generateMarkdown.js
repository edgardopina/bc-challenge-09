import { makeBadge, ValidationError } from 'badge-maker';

import licenseList from './licenseList.js';

const licenseBadge = {
	label: 'License',
	message: ``,
	labelColor: 'black',
	color: '#ce090a',
	style: 'for-the-badge',
};
let badge = ``;
let TOC = ``;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(index) {
	if (index >= 0) {
		licenseBadge.message = `${licenseList.name[index]}`;
		return `${makeBadge(licenseBadge)}\n`;
	} else {
		return ``;
	}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(index) {
	if (index >= 0) {
		return licenseList.url[index];
	} else {
		return ``;
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
	if (data.confirmLicense) {
      let index = licenseList.name.findIndex(elem => elem === data.licenseType);
		badge = renderLicenseBadge(index);
		let year = new Date();
		let section = `## License\n`;
		section += `
   Copyright (c) ${year.getFullYear()} ${data.licenseGrantor}. All rights reserved.

Licensed under the [${data.licenseType}](${renderLicenseLink(index)}).
`;
		TOC += `* [License](#license)\n`;
		return section;
	} else {
		return ``;
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	let title = `# ${data.projectTitle}\n`;
	let description = ``;
	TOC = `## Table of Contents\n`;
	let content = ``;

	if (data.description) {
		description += `## Description\n${data.description}\n`;
	}

	if (data.confirmInstallation) {
		content += `## Installation\n${data.installation}\n`;
		TOC += `* [Installation](#installation)\n`;
	}

	if (data.confirmUsage) {
		content += `## Usage\n${data.usage}\n`;
		TOC += `* [Usage](#usage)\n`;
	}

	if (data.confirmCredits) {
		content += `## Credits\n${data.credits}\n`;
		TOC += `* [Credits](#credits)\n`;
	}

	content += renderLicenseSection(data);

	if (data.confirmFeatures) {
		content += `## Features\n${data.features}\n`;
		TOC += `* [Features](#features)\n`;
	}
	if (data.confirmContribute) {
		content += `## Contributing\n${data.contributing}\n`;
		TOC += `* [Contribute](#contribute)\n`;
	}

	if (data.confirmTests) {
		content += `## Tests\n${data.tests}\n`;
		TOC += `* [Tests](#tests)\n`;
	}

	if (data.githubUser || data.email) {
		content += `## Questions\n`;
		TOC += `* [Questions](#questions)\n`;
		if (data.githubUser) content += `GitHub user profile: ${data.githubUser}\n\n`;
		if (data.email) content += `Email address: ${data.email}\n`;
	}

	return title + badge + description + TOC + content;
}

export default generateMarkdown;

/*
Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illo maxime omnis itaque autem sapiente, eius expedita quibusdam.

Earum quasi quo, aut tempora cumque eligendi suscipit beatae! Amet, possimus doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit.

Perferendis illo maxime omnis itaque autem sapiente, eius expedita quibusdam. Earum quasi quo, aut tempora cumque eligendi suscipit beatae! Amet, possimus doloribus.
*/
