import styled from 'styled-components';

const backgroundColor = (props) => {
  if (props.highlight) {
    return 'green';
  } else if (props.selected) {
    return 'red';
  }
  return props.black ? 'black' : 'white';
};

export const Square = styled.div`
  display: inline-block;
  background-color: ${backgroundColor};
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
