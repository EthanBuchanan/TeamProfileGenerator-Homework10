const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("gitHub", () => {
        
        
        it ("Should have a property 'gitHub' that holds the value given from the constructor", () => {
            const gitHub = "Looking4Clues";
        
            const newManager = new Engineer("Fred", 1, "asdf@gmail.com", gitHub);

            expect(newManager.gitHub).toEqual(gitHub);
        });

        it ("Should have a function 'getGitHub' that returns the value given from the constructor", () => {
            const gitHub = "Looking4Clues";
        
            const newManager = new Engineer("Fred", 1, "asdf@gmail.com", gitHub);
            
            expect(newManager.getGitHub()).toEqual(gitHub);
        });
    });

    describe("updated role", () => {
        
        it ("Should return a different value for the 'getRole' function", () => {
            const newManager = new Engineer("Fred", 1, "asdf@gmail.com", "Looking4Clues");

            expect(newManager.getRole()).toEqual("Engineer")
        });

    });
});