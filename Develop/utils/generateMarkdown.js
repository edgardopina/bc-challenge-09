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
	let readmePage = `# ${data.projectTitle}\n`;

	if (data.description) {
		readmePage += `## Description\n`;
		readmePage += `${data.description}\n`;
	}

	if (data.installation) {
		readmePage += `## Installation\n`;
		readmePage += `${data.installation}\n`;
	}

	if (data.usage) {
		readmePage += `## Usage\n`;
		readmePage += `${data.installation}\n`;
	}

   readmePage += `## License\n`;
	readmePage += `Copyright (c) ${data.licenseGrantor}. All rights reserved.

Licensed under the ${data.licenseType}.
`;

	if (data.contributing) {
		readmePage += `## Contributing\n`;
		readmePage += `${data.contributing}\n`;
	}

	if (data.tests) {
		readmePage += `## Tests\n`;
		readmePage += `${data.tests}\n`;
	}

	if (data.questions) {
		readmePage += `## Questions\n`;
		readmePage += `${data.questions}\n`;
	}

	if (data.credits) {
		readmePage += `## Credits\n`;
		readmePage += `${data.credits}\n`;
	}

	return readmePage;
}

export default generateMarkdown;

/*
Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illo maxime omnis itaque autem sapiente, eius expedita quibusdam. Earum quasi quo, aut tempora cumque eligendi suscipit beatae! Amet, possimus doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illo maxime omnis itaque autem sapiente, eius expedita quibusdam. Earum quasi quo, aut tempora cumque eligendi suscipit beatae! Amet, possimus doloribus.
*/
