const Manager = require('../lib/Manager')

describe("Manager", () => {
    describe('initialization', () => {
    //positive test
    it("should return a name", () => {
        const name = 'Leland';
        const obj = new Manager(name, 35, 'dummy@dummy.com', 1235437689)
        expect(obj.getName()).toBe(name);
    })
    it("should return an id", () => {
        const num = 35;
        const obj = new Manager('Leland', num, 'dummy@dummy.com', 1235437689)
        expect(obj.getId()).toBe(num);
    })
    it("should return an email", () => {
        const email = 'dummy@dummy.com';
        const obj = new Manager('Leland', 35, email, 1235437689)
        expect(obj.getEmail()).toBe(email);
    })
    it("should return a role", () => {
        const obj = new Manager('Leland', 35, 'dummy@dummy.com', 1235437689)
        expect(obj.getRole()).toBe('Manager');
    })
    it("should return a OfficeNum", () => {
        const officeNum = 1235437689
        const obj = new Manager('Leland', 35, 'dummy@dummy.com', officeNum)
        expect(obj.getOfficeNum()).toBe(officeNum);
    })

})
})