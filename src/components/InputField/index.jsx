import React from 'react';
import { InputWrapper, Label, ErrorMessage, Input } from './style';

const InputField = ({ input, placeholder, label, meta, type }) => {
  console.log(meta);
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

export default InputField;
