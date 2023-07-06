const Intern = require('../lib/Intern')

describe("Intern", () => {
    describe('initialization', () => {
    //positive test
    it("should return a name", () => {
        const name = 'Leland';
        const obj = new Intern(name, 35, 'dummy@dummy.com', 'schoolname')
        expect(obj.getName()).toBe(name);
    })
    it("should return an id", () => {
        const num = 35;
        const obj = new Intern('Leland', num, 'dummy@dummy.com', 'schoolname')
        expect(obj.getId()).toBe(num);
    })
    it("should return an email", () => {
        const email = 'dummy@dummy.com';
        const obj = new Intern('Leland', 35, email, 'schoolname')
        expect(obj.getEmail()).toBe(email);
    })
    it("should return a role", () => {
        const obj = new Intern('Leland', 35, 'dummy@dummy.com', 'schoolname')
        expect(obj.getRole()).toBe('Intern');
    })
    it("should return a OfficeNum", () => {
        const school = 'schoolname'
        const obj = new Intern('Leland', 35, 'dummy@dummy.com', school)
        expect(obj.getSchool()).toBe(school);
    })

})
})