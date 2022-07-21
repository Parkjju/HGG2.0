import styled from 'styled-components';
import Container from '../../../components/Container';
import Form from '../Form';
import FormHeader from './FormHeader';
import { Box } from './Box';
import { Label } from './Label';
import axios from 'axios';

const Button = styled.button`
  height: 40px;
  width: 206px;
  border-radius: 10px;
  background-color: #6b4eff;
  color: white;
  font-size: 20px;

  border: none;
  &:active {
    opacity: 0.9;
    border: 1px solid black;
    transition: 0.1s linear;
  }
`;

function RegisterOne() {
  const onSubmit = e => {
    e.preventDefault();
    let data = [...e.currentTarget.childNodes];
    const inputData = [];
    data.shift();
    data.pop();
    data.forEach(item => inputData.push(item.firstElementChild.value));
    console.log(inputData[1]);

    axios
      .post('/api/v1/members/', {
        id: 1,
        username: '홍길동동동',
        m_email: 'gildong@gmail23.com',
        password: 123,
      })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  return (
    <Container>
      <FormHeader />
      <Box onSubmit={onSubmit}>
        <Label>1/2단계</Label>
        <Form placeholder="이름" />
        <Form placeholder="ID@domain.com" type="email" />
        <Form placeholder="ID" />
        <Form placeholder="Password" />
        <Form placeholder="Password 확인" />
        <Form placeholder="전화번호" />
        <Form placeholder="우편번호" />
        <Form placeholder="집 주소" />
        <Button>제출하기</Button>
      </Box>
    </Container>
  );
}

export default RegisterOne;
