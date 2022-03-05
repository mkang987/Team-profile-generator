const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


//function to pass the Manager's data
function createManagerCard(theTeam) {

    let teamCard = [];
  
    const staff = theTeam[0];
    const manager = new Manager(staff.name, staff.id, staff.email, staff.officeNumber);
    teamCard.push(cardManager(manager));
    
    return teamCard.join(``);
}


//Function with loop to pass the rest of employee's information
function createEmployeeCards(theTeam) {

    let teamCard = [];
    for(let i = 1; i < theTeam.length; i++){
        const staff = theTeam[i];
        switch(staff.getRole()) {
            case 'Manager':
                const manager = new Manager(staff.name, staff.id, staff.email, staff.officeNumber);
                teamCard.push(cardManager(manager));
                break;
            case 'Engineer':
                const engineer = new Engineer(staff.name, staff.id, staff.email, staff.github);
                teamCard.push(cardEngineer(engineer));
                break;
            case 'Intern':
                const intern = new Intern(staff.name, staff.id, staff.email, staff.school)
                teamCard.push(cardIntern(intern));
                break;
        }
    }
    return teamCard.join(``);
}


//Creates base HTML
function generateTeam(teamInfo) {
    return ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile Creator</title>
    </head>

    <body>
        <!-- Header-->
    <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">Team Profile Generator</h1>
            </div>
        </div>
    </header>

    <!-- Employee Details Section -->
    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <!-- Start of Manager Card-->
                ${createManagerCard(teamInfo)}
            </div>
        </div>
    </section>

    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <!-- Start of Employee-->
                ${createEmployeeCards(teamInfo)}
            </div>
        </div>
    </section>
    </body>
    </html>
    `
}

//Creates Manager's card
const cardManager = (managerInfo) => {
    return `<div class="card bg-primary" style="width: 18rem;">
    <div class="card-header">
      ${managerInfo.getRole()}: ${managerInfo.getName()}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${managerInfo.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${managerInfo.getEmail()}">${managerInfo.getEmail()}</a></li>
      <li class="list-group-item">Office Number: ${managerInfo.getOfficeNumber()}</li>
    </ul>
  </div>
  `
}

//Creates Intern's card
const cardIntern = (internInfo) => {
    return `<section>
    <div class="card bg-success" style="width: 18rem;">
    <div class="card-header">
      ${internInfo.getRole()}: ${internInfo.getName()}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${internInfo.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${internInfo.getEmail()}">${internInfo.getEmail()}</a></li>
      <li class="list-group-item">School: ${internInfo.getSchool()}</li>
    </ul>
  </div>
  </section>
  `
}

//Creates Engineer's card
const cardEngineer = (engineerInfo) => {
    return `<section>
    <div class="card bg-info" style="width: 18rem;">
    <div class="card-header">
      ${engineerInfo.getRole()}: ${engineerInfo.getName()}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineerInfo.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineerInfo.getEmail()}">${engineerInfo.getEmail()}</a></li>
      <li class="list-group-item">GitHub:<a href="https://github.com/${engineerInfo.getGithub()}">GitHub</a></li>
    </ul>
  </div>
  </section>
  `
}

module.exports = generateTeam;