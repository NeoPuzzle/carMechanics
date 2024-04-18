export const validateTurn = (input) => {
    const errors = {};
    const currentDate = new Date();

    const dateRegex = /^(?:\d{4})-(?:\d{2})-(?:\d{2})$/;
    if (!dateRegex.test(input.date)) {
        errors.date = 'Please enter a valid date';
    } else {
        const selectedDate = new Date(input.date);
        if (selectedDate <= currentDate) {
            errors.date = 'Please select a date correctly';
        }
    }

    const timeRegex = /.+/;
    if(!timeRegex.test(input.time)) {
        errors.time = 'Please enter a time';
    }

    const descriptionRegex = /.+/;
    if (!descriptionRegex.test(input.description)) {
        errors.description = 'Please enter a description';
    }

    const userRegex = /.+/;
    if (!userRegex.test(input.user)) {
        errors.user = 'Please enter a user';
    }

    return errors;
};
