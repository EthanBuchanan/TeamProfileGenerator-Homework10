const Intern = require("../lib/intern");

descibe("Intern", () => {
    descibe("officeNumber", () => {
        
        
        const school = "CrystalCoveHighSchool";
        
        const newIntern = new Manager("Fred", 1, "asdf@gmail.com", school);

        expect(newIntern.school).toEqual(school);

        expect(newIntern.getSchool()).toEqual(school);
    });

    descibe("updated role", () => {
        
        const newIntern = new Manager("Fred", 1, "asdf@gmail.com", "CrystalCoveHighSchool");

        expect(newIntern.getRole()).toEqual("Intern")

    });
});