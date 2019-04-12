import styled from '@emotion/styled';

export const InputWrapper = styled('div')`
  margin-bottom: 20px;
  position: relative;

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-left: 20px;
    flex: 1 0 auto;
  }
  @media (min-width: 992px) {
    flex: 1 0 140px;
  }
`;

export const Label = styled('label')`
  text-transform: uppercase;
  font-size: 15px;
`;

export const Input = styled('input')`
  border: 1px solid #333333;
  border-radius: 5px;
  height: 36px;
  width: 100%;
  &:focus {
    outline: none;
    border: 6px;
    border: 1px solid #5757db;
    border-radius: 5px;
  }
`;

export const ErrorMessage = styled('div')`
  color: red;
  font-size: 12px;
`;
