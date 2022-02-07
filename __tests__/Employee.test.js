const employee = require('../lib/employee')

test('creates a employee object', () => {
    const employee = new employee('');

    expect(employee.name).toBe('');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe()
});
