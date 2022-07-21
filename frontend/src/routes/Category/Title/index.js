import styled from 'styled-components';

const TitleBox = styled.div`
  width: 100%;
  height: 132px;
  padding: 24 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  height: 84px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`;
const Title = styled.h1`
  font-size: 32px;
  line-height: 44px;
  font-weight: 400;
`;

const NumberOfProducts = styled.span`
  color: #6e6e70;
  font-size: 14px;
  line-height: 24px;
`;

function CategoryTitle() {
  return (
    <TitleBox>
      <InnerContainer>
        <Title>
          의류
          {/* props 받아서 카테고리 추가 필요 */}
        </Title>
        <NumberOfProducts>
          총 N개의 상품
          {/* props 받아서 N개 데이터 표기 필요 */}
        </NumberOfProducts>
      </InnerContainer>
    </TitleBox>
  );
}

export default CategoryTitle;
