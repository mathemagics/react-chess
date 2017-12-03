import styled from 'styled-components';

export const Square = styled.div`
  display: inline-block;
  background-color: ${props => props.black ? 'black' : 'white'};
  width: 40px;
  height: 40px;
`;

export const Row = styled.div`
`;

