const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    describe('initialization', () => {
    //positive test
    it("should return a name", () => {
        const name = 'Leland';
        const obj = new Engineer(name, 35, 'dummy@dummy.com', 'username')
        expect(obj.getName()).toBe(name);
    })
    it("should return an id", () => {
        const num = 35;
        const obj = new Engineer('Leland', num, 'dummy@dummy.com', 'username')
        expect(obj.getId()).toBe(num);
    })
    it("should return an email", () => {
        const email = 'dummy@dummy.com';
        const obj = new Engineer('Leland', 35, email, 'username')
        expect(obj.getEmail()).toBe(email);
    })
    it("should return a role", () => {
        const obj = new Engineer('Leland', 35, 'dummy@dummy.com', 'username')
        expect(obj.getRole()).toBe('Engineer');
    })
    it("should return a OfficeNum", () => {
        const github = 'username'
        const obj = new Engineer('Leland', 35, 'dummy@dummy.com', github)
        expect(obj.getGithub()).toBe(github);
    })

})
})