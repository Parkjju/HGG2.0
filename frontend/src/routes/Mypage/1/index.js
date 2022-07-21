import Container from '../../../components/Container';
import BackwardTitle from '../Home/BackwardTitle';
import Profile from '../Home/Profile';
import Header from '../../../components/Header';
import { Outlet, Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../../../components/Navigation';

const Tap = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
`;

const TapSelect = styled(Link)`
  width: 50%;
  text-decoration: none;
  border-bottom: 2px solid ${props => (props.isActive ? 'black' : 'white')};
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  transition: 0.1s linear;
`;

function MypageMain() {
  const commentURLMatch = useMatch('/mypage/comment');
  const postURLMatch = useMatch('/mypage/post');
  return (
    <Container>
      <Header />
      <BackwardTitle />
      <Profile />
      <Tap>
        <TapSelect isActive={postURLMatch ? true : false} to="post">
          게시글
        </TapSelect>

        <TapSelect isActive={commentURLMatch ? true : false} to="comment">
          댓글
        </TapSelect>
      </Tap>
      <Outlet />

      <Navigation />
    </Container>
  );
}

export default MypageMain;
