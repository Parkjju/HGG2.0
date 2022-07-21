import userIcon from '../../assets/userIcon.svg';
import searchIcon from '../../assets/searchIcon.svg';
import bellIcon from '../../assets/bellIcon.svg';
import hggLogo from '../../assets/hggLogo.png';
import { HeaderBox, HeaderIcon, HeaderIcons, HeaderLogo } from './Header.style';

function Header() {
  return (
    <HeaderBox>
      <HeaderLogo src={hggLogo} alt="흒로고" />
      <HeaderIcons>
        <HeaderIcon src={bellIcon} alt="알림아이콘" />
        <HeaderIcon src={userIcon} alt="유저이미지" />
        <HeaderIcon src={searchIcon} alt="돋보기아이콘" />
      </HeaderIcons>
    </HeaderBox>
  );
}

export default Header;
