
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Howard');
});

test('set github account with constructor', () => {
    const testValue = 'GitHubAccount';
    const e = new Engineer('Foo', 1, 'engineer@email.com', testValue);
    expect(e.github).toBe(testValue);
})

test('get github account with getGithub() method', () => {
    const testValue = 'GitHubAccount';
    const e = new Engineer('Foo', 1, 'engineer@email.com', testValue);
    expect(e.getGithub()).toBe(testValue);
});

// Test if the getRole() value is Engineer
test('getRole() return Engineer', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Foo', 1, 'engineer@email.com', 'GitHubAccount');
    expect(e.getRole()).toBe(testValue);
});