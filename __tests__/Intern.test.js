const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("school", () => {
        
        
        it ("Should have a property 'Schoole' that holds the value given from the constructor", () => {
            const school = "CrystalCoveHighSchool";
        
            const newIntern = new Intern("Fred", 1, "asdf@gmail.com", school);

            expect(newIntern.school).toEqual(school);
        });
        
        it ("Should have a function 'getSchool' that returns the value given from the constructor", () => {
            const school = "CrystalCoveHighSchool";
        
            const newIntern = new Intern("Fred", 1, "asdf@gmail.com", school);

            expect(newIntern.getSchool()).toEqual(school);
        });
    });

    describe("updated role", () => {
        
        it ("Should return a different value for the 'getRole' function", () => {
            const newIntern = new Intern("Fred", 1, "asdf@gmail.com", "CrystalCoveHighSchool");

            expect(newIntern.getRole()).toEqual("Intern")
        });

    });
});