import submit from '../../api/formApi';
import { SUBMIT_FORM } from './types';

export const submitForm = formValues => async dispatch => {
  const response = await submit.post('/pay-api', formValues);
  dispatch({ type: SUBMIT_FORM, payload: response.data });
};
