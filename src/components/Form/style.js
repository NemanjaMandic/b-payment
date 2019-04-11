import styled from '@emotion/styled';

export const Header = styled('div')`
  border-bottom: 1px solid #333;
  @media (min-width: 768px) {
    margin: 0 20px;
  }
`;
export const Title = styled('h3')`
  font-size: 40px;
  color: red;
`;

export const FormWrapper = styled('div')`
  border-radius: 5px;
  padding: 6px;
  background: #ffffff;
  @media (min-width: 992px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export const NameRow = styled('div')`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ButtonWrapper = styled('div')`
  margin: 20px 0;
  @media (min-width: 768px) {
    margin: 0 20px 20px 20px;
  }
`;
export const PayButton = styled('button')`
  background: #006a00;
  cursor: pointer;
  height: 36px;
  border: 0;
  border-radius: 5px;
  width: 100%;
  color: #fff;
  font-weight: 900;
  font-size: 23px;
  letter-spacing: 2px;
  &:disabled {
    background: #e6e6e6;
    color: #c3c3c3;
    cursor: not-allowed;
  }
`;
