import styled from '@emotion/styled';

export const FormWrapper = styled('div')`
  border: 2px solid black;
`;

export const InputWrapper = styled('div')`
 background: red;
 margin-bottom: 20px;
 position: relative;
 flex: auto;
 @media (min-width: 768px) {
  margin-right: 20px;
  margin-left: 20px;
}
 &:hover {
    background: blue;
  }
`;

export const Label = styled('label')`
 color: green;
 position: absolute;
 top: -16px;

`;

export const Input = styled('input')`
 border: 1px solid black;
 border-radius: 5px;
 height: 36px;
 width: 100%;
`;

