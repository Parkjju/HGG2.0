import styled from 'styled-components';

const NavBox = styled.div`
  height: 68px;
  width: 100%;
  padding: 4px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 20px;
`;

function BackwardTitle() {
  return (
    <NavBox>
      <Title>내 정보</Title>
    </NavBox>
  );
}

export default BackwardTitle;
