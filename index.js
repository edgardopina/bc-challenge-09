// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		name: 'projectTitle',
		message: 'What is the titlwe of your Project? (Required)',
		validate: projectTitleNotEmpty => {
			if (projectTitleNotEmpty) {
				return true;
			} else {
				console.log('Please enter the name of your project!');
				return false;
			}
		},
	},
	{
		type: 'checkbox',
		name: 'sections',
		message: 'What sections would you like to include? (Check all that apply)',
		choices: [
			{
				name: 'Description',
				checked: true,
			},
			{ name: 'Table of Contents' },
			{ name: 'Installation' },
			{ name: 'Usage' },
			{ name: 'Credits' },
			{ name: 'License' },
			{ name: 'Badges' },
			{ name: 'Features' },
			{ name: 'Contributing' },
			{ name: 'Tests' },
			{ name: 'Questions' },
		],
		validate(answer) {
			if (answer.length < 1) {
				return 'You must choice at least one section!';
			} else {
				return true;
			}
		},
	},
];

// {
// 	type: 'confirm',
// 	name: 'confirmAbout',
// 	message: 'Would you like to enter some information about yourself for an "About" section? ',
// 	default: true,
// },

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
	return inquirer.prompt(questions);
}

// Function call to initialize app
init();
