import styled from 'styled-components';

export const SearchBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
`;

export const Input = styled.input`
  border: 1px solid #95a5a6;
  border-radius: 5px;
  margin-left: 10px;
  &:focus {
    outline: none;
    border: 1px solid #5538ee;
    transition: 0.1s linear;
  }
  transition: 0.1s linear;
  padding: 5px;
`;
