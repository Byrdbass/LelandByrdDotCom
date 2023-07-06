const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe('initialization', () => {
    //positive test
    it("should return a name", () => {
        const name = 'Leland';
        const obj = new Employee(name, 35, 'dummy@dummy.com')
        expect(obj.getName()).toBe(name);
    })
    it("should return an id", () => {
        const num = 35;
        const obj = new Employee('Leland', num, 'dummy@dummy.com')
        expect(obj.getId()).toBe(num);
    })
    it("should return an email", () => {
        const email = 'dummy@dummy.com';
        const obj = new Employee('Leland', 35, email)
        expect(obj.getEmail()).toBe(email);
    })
    it("should return a role", () => {
        const obj = new Employee('Leland', 35, 'dummy@dummy.com')
        expect(obj.getRole()).toBe('Employee');
    })

})
})