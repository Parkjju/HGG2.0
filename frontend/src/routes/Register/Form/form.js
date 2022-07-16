import styled from 'styled-components';

export const InputForm = styled.input`
  width: 312px;
  height: 40px;
  background-color: #efefef;
  border-radius: 10px;
  border: 1px solid #bdc3c7;
  padding-left: 10px;
  font-size: 16px;
  &:focus {
    border: 1px solid #7f8c8d;
    transition: 0.1s linear;
    outline: none;
  }
  transition: 0.1s linear;
  &::placeholder {
    opacity: 0.6;
    font-size: 14px;
  }
`;

export const FormBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
