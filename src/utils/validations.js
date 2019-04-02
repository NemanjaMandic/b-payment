
const maxLength = max => value =>
value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength30 = maxLength(30);

export const notEmpty = min => value =>
!value.firstName ? 'You must enter First Name' : undefined;

export const required = value => (value ? undefined : 'Required')


export const validate = (formValues) => {
    console.log(formValues)
    const errors = {};
    if(!formValues.firstName){
        errors.firstName = "You must enter First Name"
    }
    if(formValues.firstName){
        if(formValues.firstName.length > 30){
            errors.firstName = "nemoze vise od 30"
        }
        
       
    }
    if(!formValues.lastName){
        errors.lastName = "You must enter Last Name"
    }

    return errors;
}