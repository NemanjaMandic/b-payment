export const validate = formValues => {
  const errors = {};
  if (!formValues.firstName) {
    errors.firstName = 'You must enter First Name';
  }
  if (formValues.firstName) {
    if (formValues.firstName.length > 30) {
      errors.firstName = 'Must be 30 character max';
    }
  }
  if (!formValues.lastName) {
    errors.lastName = 'You must enter Last Name';
  }

  if (formValues.lastName) {
    if (formValues.lastName.length > 30) {
      errors.lastName = 'Must be 30 character max';
    }
  }

  if (formValues.address) {
    if (formValues.address.length > 50) {
      errors.address = 'Must be 50 character max';
    }
  }

  if (formValues.ammount) {
    if (formValues.ammount < 10) {
      errors.ammount = '10 euros is minimum';
    }
    if (formValues.ammount > 15000) {
      errors.ammount = '15000 euros is maximum';
    }
  }

  if (!formValues.iban) {
    errors.iban = 'Please enter IBAN value';
  }
  if (formValues.iban) {
    const regex = /[NL]{2}\d{2}[A-Z]{4}\d{10}/gm;
    if (!regex.test(formValues.iban)) {
      errors.iban = 'Please use the right IBAN format';
    }
  }

  if (!formValues.bic) {
    errors.bic = 'Please enter BIC value';
  }
  if (formValues.bic) {
    const regex = /[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}[A-Z0-9]{0,3}/gm;
    if (!regex.test(formValues.bic)) {
      errors.bic = 'Please use the right BIC format';
    }
  }

  return errors;
};

export const normalizeIban = value => {
  const ibanValue = value.toUpperCase();

  if (ibanValue.length <= 18) {
    return ibanValue.trim();
  }
};

export const normalizeBic = value => {
  const bicValue = value.toUpperCase();

  if (bicValue.length <= 11) {
    return bicValue.trim();
  }
};
