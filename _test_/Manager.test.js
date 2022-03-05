const Manager = require("../lib/Manager");

test('check if able to set officeNumber', () => {
    const value = "100";
    const test = new Manager('Alex', 1, 'Alex@email.com', value);
    expect(test.officeNumber).toBe(value);
});

test('check if able to getSchool, should return Manager', () => {
    const value = "Manager";
    const test = new Manager('Alex', 1, 'Alex@email.com', '100');
    expect(test.getRole()).toBe(value);
});

test('check if able to getOfficeNumber()', () => {
    const value = "100";
    const test = new Manager('Alex', 1, 'Alex@email.com', value);
    expect(test.getOfficeNumber()).toBe(value);
});