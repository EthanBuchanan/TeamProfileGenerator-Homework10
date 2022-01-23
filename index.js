const inquirer = require("inquirer");
const fs = require("fs").promises;

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const promptEmployeeData = (role, tertiaryDataType) => {
    const inq = inquirer.prompt([
        {
            type: 'input',
            message: `Enter the name of the ${role}:  `,
            name: 'name'
        },
        {
            type: 'input',
            message: `Enter the email of the ${role}:  `,
            name: 'email'
        },
        {
            type: 'input',
            message: `Enter the employee id of the ${role}:  `,
            name: 'id'
        },
        {
            type: 'input',
            message: `Enter the ${tertiaryDataType} of the ${role}:  `,
            name: 'tert'
        }
    ]);

    return inq;
}

async function main() {

    // initialize
    const template = await fs.readFile("./src/template.html", "utf8",(err,data)=>{});

    const splitPoint = template.indexOf("<main>") + 6;

    const templateStart = template.substring(0, splitPoint);
    const templateEnd = template.substring(splitPoint);

    let employeeData = "";

    let team = []
    
    // prompt manager
    const manager = await promptEmployeeData("Manager", "Office Number")

    team.push(new Manager(manager.name, manager.id, manager.email, manager.tert));


    while (true)
    {
        const inq = await inquirer.prompt([
            {
                type: 'input',
                message: `Enter a key to choose: \n\tE - add a new engineer to the team \n\tI - add a new intern to the team \n\tQ - quit building team and export file`,
                name: 'output'
            }
        ]);

        if (inq.output.toLowerCase() == "e" )
        {
            const engineer = await promptEmployeeData("Engineer", "gitHub")

            team.push(new Manager(engineer.name, engineer.id, engineer.email, engineer.tert));
        }
        else if (inq.output.toLowerCase() == "i" )
        {
            const Intern = await promptEmployeeData("Intern", "school")

            team.push(new Manager(Intern.name, Intern.id, Intern.email, Intern.tert));
        }
        else
        {
            break;
        }
    }

    for (let i = 0; i < team.length; i++)
    {
        employeeData += team[i].toHTML();
    }


    fs.writeFile("./dist/index.html", templateStart + employeeData + templateEnd, () => {});
    fs.copyFile("./src/style.css","./dist/style.css")
}



main();

