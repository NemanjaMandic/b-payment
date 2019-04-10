import _ from 'lodash';
import { OPEN_MODAL, CLOSE_MODAL, SUBMIT_FORM } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
