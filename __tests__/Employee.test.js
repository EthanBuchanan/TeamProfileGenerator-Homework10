const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("name", () => {

        const name = "Fred"

        const newEmployee = new Employee(name, 1, "asdf@gmail.com");

        expect(newEmployee.name).toEqual(name);

        expect(newEmployee.getName()).toEqual(name);
    });

    describe("id", () => {

        const id = 1;

        const newEmployee = new Employee("Fred", id, "asdf@gmail.com");

        expect(newEmployee.id).toEqual(id);

        expect(newEmployee.getId()).toEqual(id);
    });

    describe("email", () => {

        const email = "asdf@gmail.com";

        const newEmployee = new Employee("Fred", 1, email);

        expect(newEmployee.email).toEqual(email);

        expect(newEmployee.getEmail()).toEqual(email);
    });

    describe("role", () => {

        const newEmployee = new Employee("Fred", 1, "asdf@gmail.com");

        expect(newEmployee.getRole()).toEqual("Employee");
    });
});