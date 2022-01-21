const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("officeNumber", () => {
        
        
        const school = "CrystalCoveHighSchool";
        
        const newIntern = new Manager("Fred", 1, "asdf@gmail.com", school);

        expect(newIntern.school).toEqual(school);

        expect(newIntern.getSchool()).toEqual(school);
    });

    describe("updated role", () => {
        
        const newIntern = new Manager("Fred", 1, "asdf@gmail.com", "CrystalCoveHighSchool");

        expect(newIntern.getRole()).toEqual("Intern")

    });
});