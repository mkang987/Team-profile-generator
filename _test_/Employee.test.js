const Employee = require("../lib/Employee");

test('Checks if able to create Employee instance', () => {
    const test = new Employee();
    expect(typeof(test)).toBe("object");
});

test('check if able to get name', () => {
    const value = "Alex";
    const test = new Employee(value, 1, 'alex@email.com');
    expect(test.getName()).toBe(value);
});

test('check if able to ID', () => {
    const value = "1";
    const test = new Employee('Alex', value, 'alex@email.com');
    expect(test.getId()).toBe(value);
});

test('check if able to get email', () => {
    const value = "alex@email.com";
    const test = new Employee('Alex', 1, value);
    expect(test.getEmail()).toBe(value);
});

test('check if able to get role', () => {
    const value = "Employee";
    const test = new Employee('Alex', 1, 'alex@email.com');
    expect(test.getRole()).toBe(value);
});