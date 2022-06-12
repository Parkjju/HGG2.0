import styled from 'styled-components';

const CommentBox = styled.div`
  width: 100%;
  height: 90px;
  padding: 24px 40px;
  border-bottom: 2px solid #e3e3e3;
`;
const PostInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

const PostValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40px;

  span {
    font-size: 16px;
    &:last-child {
      font-size: 12px;
    }
  }
`;

function Comment() {
  return (
    <div>
      <CommentBox>
        <PostInfo>
          {/* 게시글 정보 요청 받아오기 */}
          <PostValue>
            <span>댓글 내용</span>
            <span>게시글 제목 | 작성 날짜</span>
          </PostValue>
          {/* Onclick 넣어서 삭제 요청 백엔드로 보내야함. */}
          <span className="material-symbols-outlined">close</span>
        </PostInfo>
      </CommentBox>
      <CommentBox>
        <PostInfo>
          {/* 게시글 정보 요청 받아오기 */}
          <PostValue>
            <span>댓글 내용</span>
            <span>게시글 제목 | 작성 날짜</span>
          </PostValue>
          {/* Onclick 넣어서 삭제 요청 백엔드로 보내야함. */}
          <span className="material-symbols-outlined">close</span>
        </PostInfo>
      </CommentBox>
    </div>
  );
}

export default Comment;
