import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from './InputField';
import { maxLength30, minLength, notEmpty, validate } from '../utils/validations';
import SaveBar from './SaveBar';
import { connect } from 'react-redux';
import { submitForm } from '../actions';
import styled from '@emotion/styled';

const Kurac = styled('h1')`
 font-size: 40px;
 color: red;
`;

export const FormWrapper = styled('div')`
  border: 2px solid #e6e6e6;
  border-radius: 5px;
  padding: 6px;
`;

export const NameRow = styled('div')`
@media (min-width: 768px) {
    display: flex;
  }
`;

export const PayButton = styled('button')`
 background: green;
 cursor: pointer;
 height: 36px;
 border: 0;
 border-radius: 5px;
 width: 100%;
 &:disabled{
     background: #e6e6e6;
     cursor: not-allowed;
 }
`
class Form extends Component{

    

  

    normalizeAmount = (val) => {
        return val.replace(/\s/g , ' ');
    }

    formatAmount = (input) => {
        if (!input) return;
    
        // Remove all existing commas before converting
        // This is not required if the normalize method is implemented and already removing commas
        const cleanedInput = input.replace(/,/g , ''); 
    
        // Convert to currency format
        const convertedInput = new Intl.NumberFormat().format(cleanedInput);
    
        return convertedInput;
    }
  
    // /[A-Z]{2}\d{2} ?\d{4} ?\d{4} ?\d{4} ?\d{4} ?[\d]{0,2}/gm

   onSubmit = (formValues) => {
       const { reset } = this.props;
        //  alert(
        //      `Ime: ${formValues.firstName}
        //      Prezime: ${formValues.lastName}
        //      Adresa: ${formValues.address}
        //  `);

         this.props.submitForm(formValues);
         reset('paymentForm');
        
     }
  
    render(){
       const {addChange, discardChanges, hasChanged, valid, formView, saveChanges, handleSubmit, pristine, invalid, submitting} = this.props;
       
   
        return(
           <FormWrapper>
            <Kurac>Pusi kurac</Kurac>
            <form onSubmit={handleSubmit(this.onSubmit)}>
            <NameRow>
                <Field name="firstName" component={InputField} label="Ime" />
                <Field name="lastName" component={InputField}  label="Prezime" />
            </NameRow>
                
                <Field name="address" component={InputField}  label="Adresa" format={this.format_num} />
                <Field name="iban" 
                component={InputField}  
                type="text" 
                label="IBAN račun" 
                format={this.formatAmount} 
                normalize={this.normalizeAmount}
                />
                 <Field name="bic" 
                component={InputField}  
                type="text" 
                label="BIC račun" 
                format={this.formatAmount} 
                normalize={this.normalizeAmount}
                />

                <Field name="ammount" 
                    component={InputField}  
                    type="number" 
                    label="Ammount"
    
                />
                
                <PayButton disabled={invalid || submitting || pristine}>Submit</PayButton>
            </form>
            <div>
                <p>Ime: {console.log('KURCINA', this.renderInput)}</p>
            </div>
            <SaveBar
                onDiscardAction={discardChanges}
                open={this.props.submitForm}
                onSaveAction={saveChanges}
            />
        </FormWrapper>
        );
    }
}







const FormWrapped = reduxForm({
    form: 'paymentForm',
    validate,
})(Form);

export default connect(null, {submitForm})(FormWrapped);