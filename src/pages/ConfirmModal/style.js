import styled from '@emotion/styled';

export const Title = styled('p')`
  padding: 22px 95px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
`;

export const Row = styled('div')`
  display: flex;
  border-top: 1px solid black;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
`;

export const Action = styled('button')`
  flex: 1;
  padding: 13px;
  cursor: pointer;

  :first-of-type {
    border-bottom-left-radius: inherit;
  }
  :last-of-type {
    border-bottom-right-radius: inherit;
  }

  :hover {
    background-color: blue;
    color: white;
  }

  & + & {
    border-left: 1px solid black;
  }
`;
