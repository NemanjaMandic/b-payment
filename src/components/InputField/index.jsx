import React from 'react';
import { InputWrapper, Label, Input } from './style';

 const InputField = ({input, label, meta, type}) => {
       
    console.log(meta);
    return(
       <InputWrapper>
            <Label>{label}</Label>
            <Input {...input} autoComplete="off" type={type} />
            <div>
            {meta.touched && meta.error &&<span>{meta.error}</span>} 
            </div>
            
       </InputWrapper>
    );
}

export default InputField;