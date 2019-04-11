import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, Label, ErrorMessage, Input } from './style';

const propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.object,
  type: PropTypes.string
};

const InputField = ({ input, placeholder, label, meta, type }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input
        {...input}
        placeholder={placeholder}
        autoComplete="off"
        type={type}
      />
      <ErrorMessage>
        {meta.touched && meta.error && <span>{meta.error}</span>}
      </ErrorMessage>
    </InputWrapper>
  );
};

InputField.propTypes = propTypes;

export default InputField;
