const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("officeNumber", () => {
        
        
        it ("Should have a property 'officeNumber' that holds the value given from the constructor", () => {
            const officeNumber = 5;
        
            const newManager = new Manager("Fred", 1, "asdf@gmail.com", officeNumber);

            expect(newManager.officeNumber).toEqual(officeNumber);
        });

        it ("Should have a function 'getOfficeNumber' that returns the value given from the constructor", () => {
            const officeNumber = 5;
        
            const newManager = new Manager("Fred", 1, "asdf@gmail.com", officeNumber);
            
            expect(newManager.getOfficeNumber()).toEqual(officeNumber);
        });
    });

    describe("updated role", () => {
        
        it ("Should return a different value for the 'getRole' function", () => {
            const newManager = new Manager("Fred", 1, "asdf@gmail.com", 5);

            expect(newManager.getRole()).toEqual("Manager")
        });
    });
});