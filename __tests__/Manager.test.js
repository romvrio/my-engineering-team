const manager = require('../lib/Manager')

test('creates a manager object', () => {
    const manager = new Manager('');

    expect(manager.name).toBe('');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe()
})

