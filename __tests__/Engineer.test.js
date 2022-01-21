const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("officeNumber", () => {
        
        
        const gitHub = "Looking4Clues";
        
        const newManager = new Manager("Fred", 1, "asdf@gmail.com", gitHub);

        expect(newManager.gitHub).toEqual(gitHub);

        expect(newManager.getGitHub()).toEqual(gitHub);
    });

    describe("updated role", () => {
        
        const newManager = new Manager("Fred", 1, "asdf@gmail.com", "Looking4Clues");

        expect(newManager.getRole()).toEqual("Engineer")

    });
});