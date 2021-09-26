# README.md Generator
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="393.75" height="28" role="img" aria-label="LICENSE: CREATIVE COMMONS ZERO V1.0 UNIVERSAL"><title>LICENSE: CREATIVE COMMONS ZERO V1.0 UNIVERSAL</title><g shape-rendering="crispEdges"><rect width="75.75" height="28" fill="black"/><rect x="75.75" width="318" height="28" fill="#ce090a"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><text transform="scale(.1)" x="378.75" y="175" textLength="517.5" fill="#fff">LICENSE</text><text transform="scale(.1)" x="2347.5" y="175" textLength="2940" fill="#fff" font-weight="bold">CREATIVE COMMONS ZERO V1.0 UNIVERSAL</text></g></svg>
## Description
Any GitHub project needs a good README.md file that explains the purpose of the application as well as how to install it, run it, contribute to it, and to contact the author(s) for guidance and clarification. This project's goal is to provide a tool built on [node.js](https://nodejs.org/en/about/) that will assist in this process. 

The _"README.md Generator"_ app facilitates this process by using the Console to present a series of prompts where the end user is free to select most of the sections of their README.md file. The user is <span style="text-decoration: underline">*required*</span> to enter the "Project Title", "Description", "GitHub username", and their "Email Address"; but, all other recomended sections are presented as optional and the end user can decide if he/she wants to include it or not. Recomended sections are presented with a selection option that defaults to "true", and optional sections are presented with a selection option that defaults to "false".

This project uses [node.js](https://nodejs.org/en/about/) as the framework and glue of the application and integrates it with several npm packages like [inquirer.js](https://www.npmjs.com/package/inquirer) - to present the user with prompts to fill-out the content of the README.md file, [badge-maker](https://www.npmjs.com/package/badge-maker) - to design and create the application licensing badge, and [node-fetch](https://www.npmjs.com/package/node-fetch) - to implement the FETCH API in [node.js](https://nodejs.org/en/about/).

## Installation
Carefully following these steps to install the _"README.md Generator"_ application in your computer:
1. Create a repository in your GitHUb account, i.e. "readme-generator".
2. In your local computer, move to the parent Git folder (or create it) where you will install the  _"README.md Generator"_ application.
4. With the terminal prompt active, clone the application repository into your local repository by entering this command (remove single quotes): 'git clone git@github.com:JoseEPina/readme-generator.git'
5. Navigate to your local **_readme-generator_** folder. 
6. Get **_your_** ssh url key from your own GitHub repository, as shown here: [Get your remote SSH url key] ('./assets/images/getYourSshUrlKey.jpg')
7. Using the SSH url key obtained in the previous step, create a conection to **_your_** repository by entering this command (remove single quotes): 'git remote set-url origin yourSshUrlKey'
8. Install [node.js](https://nodejs.org/en/) (follow node.js instructions).
9. Install the npm [inquirer.js](https://www.npmjs.com/package/inquirer) package (follow inquirer instructions).
10. Install the npm [node-fetch](https://www.npmjs.com/package/node-fetch) package (follow node-fetch instructions).
11. Install the npm  [badge-maker](https://www.npmjs.com/package/badge-maker) package (follow badge-maker instructions).
12. Stage, Commit, and Push to your repository by entering this command: 'git push origin main'
13. From your local main branch run the application by entering: **_node index_** in the terminal prompt.

## Usage
1. After completing Installation Instructions, launch the application through the terminal with the command: _**node index**_.

2. A help-start message will be displayed at the beginning to provide further instructions about the editor usage and basic markdown syntax.

3. You will be prompted throught the terminal to enter a Project Title and a Descruption. Please note that these are marked as **(Required)**.

4. Take note that some prompts will deploy a text editor application in order for you to enter the appropriate information.

5. The _**minimum reccomended**_ sections to include in your README.md are defaulted to be included but you can select 'No' to exclude them.

6. Some optional sections are defaulted to NOT be included, but you can select 'Yes' to include them.

7. At the end of the program, you can _git push_ your files into your GitHub Repository and see your finalized README.md file. If you want to make changes, you can
copy and paste from your README.md file into the prompts and make adjustments as needed. 

8. Please refer to the following video link for additional [usage examples](https://drive.google.com/file/d/1y23PSlKCuoO_wQvGMAcWKsHr1Sp95J6j/view).  

## Credits
* [Simon Boudrias](https://github.com/SBoudrias) creator of the npm [inquirer.js](https://www.npmjs.com/package/inquirer) package.
* [Xander Rapstine Xandromus](https://github.com/Xandromus) provided seven empty function declarations and one empty function call as starter code for this project.
* Open-source community - creators of [node.js](https://nodejs.org/en/about/) and [node-fetch](https://www.npmjs.com/package/node-fetch).

## License

## Questions

  
