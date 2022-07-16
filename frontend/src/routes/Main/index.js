import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import GoodsCard from './Card';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding-top: 10px;
`;

function Main() {
  return (
    <Container>
      <Header />
      <Navigation />
      <GoodsCard />
    </Container>
  );
}

export default Main;
