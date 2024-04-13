export const validateRegister = (input) => {
    const errors = {};
    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const birthRegex = /^(?:19[5-9]\d|20(?:[0-1]\d|2[0-3]))-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$/
    const dniRegex = /^\d{8}$/;
    const usernameRegex = /^[a-zA-Z0-9_]{6,12}$/;
    const passwordRegex =/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;

    if(!nameRegex.test(input.name)) {
        errors.name = 'Invalid name';
    }

    if(!emailRegex.test(input.email)) {
        errors.email = 'Invalid email';
    }

    if(!birthRegex.test(input.birthdate)) {
        errors.birthdate = 'User must be at least 18 years old';
    }

    if(!dniRegex.test(input.nDni)) {
        errors.nDni = 'Invalid DNI';
    }

    if(!usernameRegex.test(input.username)) {
        errors.username = 'Username must be between 6 and 12 characters';
    }

    if(!passwordRegex.test(input.password)) {
        errors.password = 'Password must contain at least 8 characters, one letter and one number';
    }

    return errors;
    }