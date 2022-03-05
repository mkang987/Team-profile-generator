const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');


const generateTeam = require('./src/generateTeam');

const theTeam = [];


//main menu will run first to make sure a manager is being added.
const mainMenu = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "Please enter the manager name.",
            name: 'managerName',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please input a name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "Please enter Manager ID (Must be numbers).",
            name: 'managerId',
            validate: id => {
                if (isNaN(id) || !id) {
                    console.log("Please enter a valid ID number.")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: "Please enter Manager's Email.",
            name: 'managerEmail',
            validate: email => {
                //This checks if input is a valid email format
                checkMail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if (checkMail) {
                    return true;
                } else {
                    console.log("Please enter a valid email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "Please enter Manager's office number.",
            name: 'managerOfficeNumber',
            validate: officeNumber => {
                if (isNaN(officeNumber) || !officeNumber || officeNumber < 0) {
                    console.log("Please enter a a valid office number")
                    return false;
                } else {
                    return true;
                }
            }
        },
    ])
    .then((managerData) =>
    {
        const manager = new Manager(
            managerData.managerName,
            managerData.managerId,
            managerData.managerEmail,
            managerData.managerOfficeNumber
        );
        theTeam.push(manager);
        buildTeam();
    })
}

//List of which member to add or finish adding members to generate page
function buildTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamPick',
            message: 'Which type of team member would you like to add?',
            choices: [
                'Engineer',
                'Intern',
                'Done adding members.',
            ],
        },
    ]).then((choice) => {
        switch(choice.teamPick) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                writeToFile('dist/index.html',generateTeam(theTeam));
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engName',
            message: "what is the engineer's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please input a name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the engineer's ID?",
            name: 'engId',
            validate: id => {
                if (isNaN(id) || !id) {
                    console.log("Please enter a valid ID number.")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: "Please enter Engineer's email",
            name: 'engEmail',
            validate: email => {
                //This checks if input is a valid email format
                checkMail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if (checkMail) {
                    return true;
                } else {
                    console.log("Please enter a valid email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "Please enter engineer's GitHub username.",
            name: 'engGitHub',
            validate: username => {
                if (!username) {
                    console.log("Please enter a GitHub username")
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]).then((engInfo) => {
        const engineer = new Engineer(
            engInfo.engName,
            engInfo.engId,
            engInfo.engEmail,
            engInfo.engGitHub,
        );
        theTeam.push(engineer);
        buildTeam();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "what is the Intern's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please input a name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the Intern's ID?",
            name: 'internId',
            validate: id => {
                if (isNaN(id) || !id) {
                    console.log("Please enter a valid ID number.")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: "Please enter Intern's email",
            name: 'internEmail',
            validate: email => {
                //This checks if input is a valid email format
                checkMail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if (checkMail) {
                    return true;
                } else {
                    console.log("Please enter a valid email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What school does the intern attend?.",
            name: 'internSchool',
            validate: school => {
                if (!school) {
                    console.log("Please enter a school name")
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]).then((internInfo) => {
        const intern = new Intern(
            internInfo.internName,
            internInfo.internId,
            internInfo.internEmail,
            internInfo.internSchool,
        );
        theTeam.push(intern);
        buildTeam();
    })
}

mainMenu();

function writeToFile(file, data) {
    fs.writeFileSync(file, data, (err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('File successfully created')
        }
    });
    };