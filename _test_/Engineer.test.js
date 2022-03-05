const Engineer = require("../lib/Engineer");

test('check if able to set a gibhub account', () => {
    const value = "GitHubAccount";
    const test = new Engineer('Alex', 1, 'Alex@email.com', value);
    expect(test.github).toBe(value);
});

test('check if able to getRole, should return engineer', () => {
    const value = "Engineer";
    const test = new Engineer('Alex', 1, 'Alex@email.com', 'GitHubAccount');
    expect(test.getRole()).toBe(value);
});

test('check if able to getGithub()', () => {
    const value = "GitHubAccount";
    const test = new Engineer('Alex', 1, 'Alex@email.com', value);
    expect(test.getGithub()).toBe(value);
});