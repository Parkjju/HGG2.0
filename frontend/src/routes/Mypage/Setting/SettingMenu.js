import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Menu = styled(Link)`
  display: flex;
  text-decoration: none;
  width: 100%;
  height: 50px;
  padding: 20px 60px;
  justify-content: space-between;
  align-items: center;
  &:hover {
    opacity: 0.7;
  }
  transition: 0.1s linear;
`;

function SettingMenu({ menuTitle, url }) {
  return (
    <Menu to={url}>
      <span>{menuTitle}</span>
      <span className="material-symbols-outlined">chevron_right</span>
    </Menu>
  );
}
export default SettingMenu;
