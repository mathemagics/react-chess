import styled from 'styled-components';

export const Square = styled.div`
  display: inline-block;
  background-color: ${
  (props) => {
    if (props.highlight) {
      return 'green';
    }
    return props.black ? 'black' : 'white';
  }}
  width: 40px;
  height: 40px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Board = styled.div`
  display: flex;
  flex-direction: row;
`;
