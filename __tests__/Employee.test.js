const Employee = require("../lib/employee");

descibe("Employee", () => {
    descibe("name", () => {

        const name = "Fred"

        const newEmployee = new Employee(name, 1, "asdf@gmail.com");

        expect(newEmployee.name).toEqual(name);

        expect(newEmployee.getName()).toEqual(name);
    });

    descibe("id", () => {

        const id = 1;

        const newEmployee = new Employee("Fred", id, "asdf@gmail.com");

        expect(newEmployee.id).toEqual(id);

        expect(newEmployee.getId()).toEqual(id);
    });

    descibe("email", () => {

        const email = "asdf@gmail.com";

        const newEmployee = new Employee("Fred", 1, email);

        expect(newEmployee.email).toEqual(email);

        expect(newEmployee.getEmail()).toEqual(email);
    });

    descibe("role", () => {

        const newEmployee = new Employee("Fred", 1, "asdf@gmail.com");

        expect(newEmployee.getRole()).toEqual("Employee");
    });
});