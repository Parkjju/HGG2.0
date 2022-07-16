import Container from '../../../components/Container';
import BackwardTitleBox from '../Home/BackwardTitleBox';
import SettingMenu from './SettingMenu';

function Setting() {
  return (
    <Container>
      <BackwardTitleBox title="설정" />
      <SettingMenu menuTitle="프로필" url="profile" />
      <SettingMenu menuTitle="계정" url="account" />
      <SettingMenu menuTitle="좋아요" url="like" />
      <SettingMenu menuTitle="장바구니" url="wishlist" />
    </Container>
  );
}

export default Setting;
