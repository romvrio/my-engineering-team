const intern = require('../lib/intern')

test('creates a intern object', () => {
    const intern = new intern('');

    expect(intern.name).toBe('');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe()
});
