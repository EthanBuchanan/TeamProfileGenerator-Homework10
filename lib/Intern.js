const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name,id,email);
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }

    toHTML()
    {
        return `
                <div class="card">
                    <div class="card-header">
                        ${this.name} <br>
                        👩‍🎓 Intern
                    </div>
                    <div class="card-body">                
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">email: ${this.email}</li>
                            <li class="list-group-item">gitHub: ${this.school}</li>
                        </ul>
                    </div>
                </div>`
    }
}

module.exports = Intern;