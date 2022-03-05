const Intern = require("../lib/Intern");

test('check if able to set a school', () => {
    const value = "GATECH";
    const test = new Intern('Alex', 1, 'Alex@email.com', value);
    expect(test.school).toBe(value);
});

test('check if able to getSchool, should return engineer', () => {
    const value = "Intern";
    const test = new Intern('Alex', 1, 'Alex@email.com', 'GATECH');
    expect(test.getRole()).toBe(value);
});

test('check if able to getSchool()', () => {
    const value = "GATECH";
    const test = new Intern('Alex', 1, 'Alex@email.com', value);
    expect(test.getSchool()).toBe(value);
});