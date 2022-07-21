import styled from 'styled-components';

const NavBox = styled.div`
  height: 68px;
  width: 100%;
  padding: 4px 12px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 20px;
`;
function BackwardTitleBox({ title }) {
  return (
    <div>
      <NavBox>
        <span className="material-symbols-outlined">arrow_back</span>
        <Title>{title}</Title>
      </NavBox>
    </div>
  );
}

export default BackwardTitleBox;
