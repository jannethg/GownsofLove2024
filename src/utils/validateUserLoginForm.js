const validateUserLoginForm = (values) => {
    const errors = {};
    if (!values.username ) {
        errors.username  = 'Required';
    } 
    if (!values.password ) {
        errors.password  = 'Required';
    }
    if (values.username.length < 2) {
        errors.username = 'Must be at least 2 characters.';
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }
    if (values.password.length < 8) {
        errors.password  = 'Must be at least 8 characters.';
    } 
    return errors;
};

export default validateUserLoginForm;


