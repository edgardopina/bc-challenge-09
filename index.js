const clearTheScreen = '\u001b[3J\u001b[2J\u001b[1J';
// TODO: Include packages needed for this application

const fs = require('fs');

const inquirer = require('inquirer');

const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

const helpStart = `                           Welcome to the "README.md Generator" Application

1. You will be asked to enter information until you answer "Required" prompts.
2. For EMPTY prompts, you still need to open and close the Editor when you are prompted to.
3. The Windows default editor is NotePad.
   a) Use alt-tab to navigate to the NotePad editor if needed.
   b) Do enable the menu option 'Format Word-Wrap' for a better experience.
   c) Hit 'enter' key twice when you want to finish a paragraph.
   d) Save AND Close the file - use mouse or alt-F4.
   e) For other editors, follow the editor's instructions.
4. You can iterate over your initial version of README.md file by reusing (copy/paste) the content 
   from the generated README.md file into the new prompts to make adjustments as needed.
5. Use Markdown syntax as neeeded to beautify your README.md file.
   a) The h1 'Project Name' header, and all h2 'Section Name' headers ARE provided by the application.
   b) Full reference of Markdown syntax at: https://guides.github.com/features/mastering-markdown/
   c) Basic sintax follows:
	
	### h3 header
	#### h4 headers
	##### h5 header
	###### h6 header
	This is a paragraph - paragraphs are separated by an blank line (hit enter 2 times)
	**bold**
	__bold__
	*italic*
	_italic_
	_You **can** combine them_
	http://my.domain.com/landingPage
	[link description](http://my.domain.com/landingPage)
	![my alt text] ('./local/path/to/myFile)
	![my alt text] (http://url.path.to/aFile)
   
6. If you cannot see all these instructions, cancel the process with ctrl-c, then MAXIMIZE your
   terminal/console and re-launch the application for the best user experience.

                                 Enjoy using "README.md Generator"!`;

const helpEnd = `
Congratulations, your README.md file has been generated. You will find the README.md file in the root
directory. You may want to push it to your GitHub repository to see it or you can use a VS Code 
extension to preview it within VS Code.

                            Thank you for using the "README.md Generator!`;

// TODO: Create an array of questions for user input
const userHeaders = [
	{
		type: 'input',
		name: 'projectTitle',
		message: '\nWhat is the title of your Project? (Required)',
		validate: notEmpty => {
			if (notEmpty) {
				return true;
			} else {
				return false;
			}
		},
	},
	{
		type: 'editor',
		name: 'description',
		message: '\nEnter a detailed PROJECT DESCRIPTION section. (Required)',
		validate: notEmpty => {
			if (notEmpty) {
				return true;
			} else {
				return false;
			}
		},
	},
	{
		type: 'editor',
		name: 'installation',
		message: '\nEnter the step-by-step INSTALLATION INSTRUCTIONS section or leave EMPTY.',
	},
	{
		type: 'editor',
		name: 'usage',
		message: '\nEnter instructions about your app USAGE section or leave EMPTY.',
	},
	{
		type: 'editor',
		name: 'license',
		message: '\nEnter instructions about your app LICENSE section or leave EMPTY.',
	},
	{
		type: 'editor',
		name: 'contributing',
		message: '\nEnter the CONTRIBUTING  section or leave EMPTY.',
	},
	{
		type: 'editor',
		name: 'tests',
		message: '\nEnter instructions about your app TESTS section or leave EMPTY.',
	},
	{
		type: 'editor',
		name: 'questions',
		message: '\nEnter the QUESTIONS section or leave EMPTY.',
	},
	{
		type: 'editor',
		name: 'credits',
		message: '\nEnter the CREDITS section or leave EMPTY.',
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	{
		return new Promise((resolve, reject) => {
			fs.writeFile(fileName, data, err => {
				// if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
				if (err) {
					reject(err);
					// return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
					return;
				}
				// if everything went well, resolve the Promise and send the successful data to the `.then()` method
				resolve({
					ok: true,
					message: 'File created!',
				});
			});
		});
	}
}

// TODO: Create a function to initialize app
function init() {
	console.log(clearTheScreen);
	console.log(helpStart);
	return inquirer.prompt(userHeaders);
}

init()
	.then(data => {
		return generateMarkdown(data);
	})
	.then(readmePage => {
		return writeToFile('README.md', readmePage);
	})
	.finally(() => {
		console.log(clearTheScreen);
		console.log(helpEnd);
	});

/*
Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illo maxime omnis itaque autem sapiente, eius expedita quibusdam. Earum quasi quo, aut tempora cumque eligendi suscipit beatae! Amet, possimus doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illo maxime omnis itaque autem sapiente, eius expedita quibusdam. Earum quasi quo, aut tempora cumque eligendi suscipit beatae! Amet, possimus doloribus.
*/
