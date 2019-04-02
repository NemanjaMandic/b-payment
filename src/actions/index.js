import submit from '../api/formApi';
import { SUBMIT_FORM } from './types';

export const drkajKurac = () => {
    return {
        type: 'DRKAJ_KURAC'
    };
}

export const sisajKurac = () => {
    return {
        type: 'SISAJ_KURAC'
    };
}

export const submitForm = formValues => async dispatch => {
 
    const response =  await submit.post('/pay-api', formValues);
    dispatch({ type: SUBMIT_FORM, payload: response.data });

};

