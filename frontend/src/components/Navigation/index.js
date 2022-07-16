import { NavBar, NavBarIcons, Img } from './Navigation.style';
import homeIcon from '../../assets/homeIcon.svg';
import goodsBulletineIcon from '../../assets/goodsBulletineIcon.svg';
import goodsPlusIcon from '../../assets/goodsPlusIcon.svg';
import reviewBulletineIcon from '../../assets/reviewBulletineIcon.svg';
import faqIcon from '../../assets/faqIcon.svg';

function Navigation() {
  return (
    <NavBar>
      <NavBarIcons>
        <Img src={homeIcon} alt="홈" />
        <Img src={goodsBulletineIcon} alt="상품게시판" />
        <Img src={goodsPlusIcon} alt="게시글등록" />
        <Img src={reviewBulletineIcon} alt="후기게시판" />
        <Img src={faqIcon} alt="FAQ" />
      </NavBarIcons>
    </NavBar>
  );
}

export default Navigation;
