import styled from 'styled-components';
import avatar from '../../images/Avatar.png';

const ProfileBox = styled.div`
  width: 100%;
  height: 184px;
  padding: 24px 30px;
  display: flex;
  justify-content: space-between;
`;

const AvatarInfo = styled.div`
  width: 230px;
  height: 110px;
  display: flex;
`;
const Avatar = styled.img`
  width: 54px;
  height: 54px;
  margin-right: 30px;
`;
const AvatarNameBox = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const AvatarName = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const AvatarActivity = styled.div`
  display: flex;
  flex-direction: column;
`;
const AvatarActivityValue = styled.span`
  font-size: 16px;
`;

function Profile() {
  return (
    <ProfileBox>
      <AvatarInfo>
        {/* 아바타 이미지 정보 쿼리요청 필요 */}
        <Avatar src={avatar} />
        <AvatarNameBox>
          {/* 유저네임 쿼리요청 필요 */}
          <AvatarName>김멋사님</AvatarName>
          <AvatarActivity>
            {/* 방문 횟수 & 작성한 글 수 query요청 필요 */}
            <AvatarActivityValue>방문 횟수</AvatarActivityValue>
            <AvatarActivityValue>작성한 글 수</AvatarActivityValue>
          </AvatarActivity>
        </AvatarNameBox>
      </AvatarInfo>
      <span className="material-symbols-outlined">settings</span>
    </ProfileBox>
  );
}

export default Profile;
