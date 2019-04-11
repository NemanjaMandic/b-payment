import styled from '@emotion/styled';

export const Root = styled('div')`
  font-family: 'Heebo', sans-serif;
  background: #3a3a3a;
  @media (min-width: 768px) {
    padding: 120px;
  }
`;

export const List = styled('ul')`
  list-style: none;
`;

export const Item = styled('li')`
  font-size: 20px;
  margin-bottom: 10px;
`;
