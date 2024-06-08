export default class Validator {
    validateUsername(username) {
        const usernameRegex = /^(?![0-9_-])(?!.*\d{3,})[a-zA-Z0-9_-]+(?<![_-])$/;
        return usernameRegex.test(username);
    }
}