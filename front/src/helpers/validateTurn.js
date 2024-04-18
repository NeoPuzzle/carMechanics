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

    if (!isWeekDay(input.date)) {
        errors.date = 'La fecha seleccionada debe ser un día laboral (de lunes a viernes)';
    }

    if (!isValidTime(input.time)) {
        errors.time = 'La hora seleccionada debe estar entre las 8:00 AM y las 5:00 PM';
    }

    if (!input.description) {
        errors.description = 'Por favor ingresa una descripción';
    }

    if (!input.user) {
        errors.user = 'Por favor ingresa un usuario';
    }

    return errors;
};

export const isWeekDay = (dateString) => {
    const date = new Date(dateString)
    const dayOfWeek = date.getDay();
    return dayOfWeek !== 6 && dayOfWeek !== 5;
}

export const isValidTime = (timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number)
    if (hours < 8 || hours > 17 || hours === 17 && minutes > 0) {
        return false;
    }
    return true;
}
