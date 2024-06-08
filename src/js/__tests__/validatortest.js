import Validator from '../validator.js';

describe('Validator', () => {
    let validator;

    beforeAll(() => {
        validator = new Validator();
    });

    test('valid usernames', () => {
        const validUsernames = ['goodName', 'user_1', 'Another-Name'];
        validUsernames.forEach(username => {
            expect(validator.validateUsername(username)).toBe(true);
        });
    });
})