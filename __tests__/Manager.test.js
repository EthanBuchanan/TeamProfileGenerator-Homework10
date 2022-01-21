const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("officeNumber", () => {
        
        
        const officeNumber = 5;
        
        const newManager = new Manager("Fred", 1, "asdf@gmail.com", officeNumber);

        expect(newManager.officeNumber).toEqual(officeNumber);

        expect(newManager.getOfficeNumber()).toEqual(officeNumber);
    });

    describe("updated role", () => {
        
        const newManager = new Manager("Fred", 1, "asdf@gmail.com", 5);

        expect(newManager.getRole()).toEqual("Manager")

    });
});