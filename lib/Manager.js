const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    toHTML()
    {
        return `
                <div class="card">
                    <div class="card-header">
                        ${this.name} <br>
                        ☕ Manager
                    </div>
                    <div class="card-body">                
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">email: ${this.email}</li>
                            <li class="list-group-item">gitHub: ${this.officeNumber}</li>
                        </ul>
                    </div>
                </div>`
    }
}

module.exports = Manager;