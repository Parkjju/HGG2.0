import styled from 'styled-components';
import jacket from '../../../images/jacket.png';

const dummyResult = {
  img: '../../images/jacket.png',
  writer: '작성자',
  title: '게시글 제목',
  date: '날짜',
};
const Box = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 20px 26px;
  border-bottom: 2px solid #e3e3e3;
`;
const Image = styled.img`
  height: 66px;
  width: 90px;
  margin-right: 14px;
`;

const GoodsInformation = styled.div`
  height: 66px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const GrayInformation = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #e3e3e3;
`;

const TitleInformation = styled.span`
  font-size: 16px;
  line-height: 24px;
`;

function CategoryResult() {
  return (
    // useEffect로 카테고리 해당 데이터 긁어오는 코드 추가 필요
    // React-query로 리팩토링

    // Box개수 동적 변화 필요
    // Box 많아지는 경우 대비, 무한스크롤 구현
    <Box>
      <Image src={jacket} />
      <GoodsInformation>
        <GrayInformation>{dummyResult.writer}</GrayInformation>
        <TitleInformation>{dummyResult.title}</TitleInformation>
        <GrayInformation>{dummyResult.date}</GrayInformation>
      </GoodsInformation>
    </Box>
  );
}

export default CategoryResult;
