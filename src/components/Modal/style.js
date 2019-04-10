import styled from '@emotion/styled';

export const Background = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.73);
`;

export const Box = styled('div')`
  border-radius: 4px;
  background-color: #ffffff;
  font-family: 'Heebo', sans-serif;
`;
