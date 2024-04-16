export const validateTurn = (input) => {

    const errors = {};
    const birthRegex = /^(?:19[5-9]\d|20(?:[0-1]\d|2[0-3]))-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$/
    
    if(!birthRegex.test(input.date)) {
        errors.date = 'User must be at least 18 years old';
    }
    return errors;
}