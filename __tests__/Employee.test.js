const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("name", () => {
        it ("Should have a property 'name' that holds the value given from the constructor", () => {
            const name = "Fred"

            const newEmployee = new Employee(name, 1, "asdf@gmail.com");

            expect(newEmployee.name).toEqual(name);
        });

        it ("Should have a function 'getName' that returns the value given from the constructor", () => {
            const name = "Fred"

            const newEmployee = new Employee(name, 1, "asdf@gmail.com");

            expect(newEmployee.getName()).toEqual(name);
        });
    });

    describe("id", () => {
        
        it ("Should have a property 'id' that holds the value given from the constructor", () => {
            const id = 1;

            const newEmployee = new Employee("Fred", id, "asdf@gmail.com");

            expect(newEmployee.id).toEqual(id);
        });

        it ("Should have a function 'getId' that returns the value given from the constructor", () => {
            const id = 1;

            const newEmployee = new Employee("Fred", id, "asdf@gmail.com");

            expect(newEmployee.getId()).toEqual(id);
        });
    });

    describe("email", () => {

        it ("Should have a property 'email' that holds the value given from the constructor", () => {
            const email = "asdf@gmail.com";

            const newEmployee = new Employee("Fred", 1, email);

            expect(newEmployee.email).toEqual(email);
        });


        it ("Should have a function 'getEmail' that returns the value given from the constructor", () => {
            const email = "asdf@gmail.com";

            const newEmployee = new Employee("Fred", 1, email);

            expect(newEmployee.getEmail()).toEqual(email);
        });
    });

    describe("role", () => {

        it ("Should have a function 'getRole' that returns the value 'Employee'", () => {
            const newEmployee = new Employee("Fred", 1, "asdf@gmail.com");

            expect(newEmployee.getRole()).toEqual("Employee");
        });
    });
});