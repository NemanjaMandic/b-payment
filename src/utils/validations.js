const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength30 = maxLength(30);

export const notEmpty = min => value =>
  !value.firstName ? 'You must enter First Name' : undefined;

export const required = value => (value ? undefined : 'Required');

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
      errors.ammount = 'Nemoze manje od 10';
    }
    if (formValues.ammount > 15000) {
      errors.ammount = '15000 je maksimum';
    }
  }

  if (!formValues.iban) {
    errors.iban = 'Nemoze pracno';
  }
  if (formValues.iban) {
    const regex = /[NL]{2}\d{2}[A-Z]{4}\d{10}/gm;
    if (!regex.test(formValues.iban)) {
      errors.iban = 'Nije dobar format';
    }
  }

  if (formValues.bic) {
    const regex = /[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}[A-Z0-9]{0,3}/gm;
    if (!regex.test(formValues.bic)) {
      errors.bic = 'Nije dobar format';
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
