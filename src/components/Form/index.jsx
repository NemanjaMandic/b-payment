import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from '../InputField';
import { normalizeIban, normalizeBic, validate } from '../../utils/validations';
import {
  FormWrapper,
  Title,
  NameRow,
  Header,
  ButtonWrapper,
  PayButton
} from './style';

class Form extends Component {
  // onSubmit = formValues => {
  //   //const { reset } = this.props;
  //   this.props.onSubmit(formValues);
  //   //reset('paymentForm');
  // };

  render() {
    const { handleSubmit, pristine, invalid, submitting } = this.props;

    return (
      <FormWrapper>
        <Header>
          <Title>Payment Information</Title>
        </Header>
        <form onSubmit={handleSubmit}>
          <NameRow>
            <Field name="firstName" component={InputField} label="First Name" />
            <Field name="lastName" component={InputField} label="Last Name" />
          </NameRow>

          <Field name="address" component={InputField} label="Address" />
          <Field
            name="iban"
            component={InputField}
            type="text"
            label="IBAN"
            placeholder="Format Example: NL23PSJF7216471865"
            normalize={normalizeIban}
          />
          <Field
            name="bic"
            component={InputField}
            type="text"
            label="BIC"
            normalize={normalizeBic}
          />

          <Field
            name="ammount"
            component={InputField}
            type="number"
            label="Ammount in €"
          />
          <Field name="currency" component="label" type="text" />
          <ButtonWrapper>
            <PayButton disabled={invalid || submitting || pristine}>
              PAY
            </PayButton>
          </ButtonWrapper>
        </form>
      </FormWrapper>
    );
  }
}

export default reduxForm({
  form: 'paymentForm',
  initialValues: { ammount: '0', iban: 'NL23PSJF7216471865', currency: '€' },
  validate
})(Form);
