const engineer = require('../lib/engineer')

test('creates a engineer object', () => {
    const engineer = new engineer('');

    expect(engineer.name).toBe('');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe()
});
