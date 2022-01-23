const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, gitHub) {
        super(name,id,email);
        this.gitHub = gitHub;
        this.role = "Engineer";
    }

    getGitHub() {
        return this.gitHub;
    }

    toHTML()
    {
        return `
                <div class="card">
                    <div class="card-header">
                        ${this.name} <br>
                        🤓 Engineer
                    </div>
                    <div class="card-body">                
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">email: ${this.email}</li>
                            <li class="list-group-item">gitHub: ${this.gitHub}</li>
                        </ul>
                    </div>
                </div>`
    }

}

module.exports = Engineer;