import styled from 'styled-components';
import { UserInfo } from '@pages/my/features/mocks/userInfo';
import { UserImg } from '@pages/my/components/UserImg';
import { IcEmptyProfile } from '@shared/assets/icon/ic-emptyProfileIcon';
export const ProfileHeader = () => {
  const renderLikes = () => {
    const like = UserInfo?.like;

    if (like === undefined) {
      return <span>0</span>;
    } else if (like >= 10000) {
      return <span>{Math.floor(like / 10000)}만</span>;
    } else if (like >= 1000) {
      return <span>{(like / 10000).toFixed(1)}만</span>;
    } else {
      return <span>{like}</span>;
    }
  };

  if (UserInfo)
    return (
      <Container>
        {UserInfo.img ? (
          <UserImg img={UserInfo.img} width="9.479vh" height="9.479vh" />
        ) : (
          <EmptyProfile>
            <IcEmptyProfile width="9.479vh" height="9.479vh" />
          </EmptyProfile>
        )}
        <UserInfoContaniner>
          <UserInfoSection>
            <span className="responsive-div">{UserInfo.name}</span>
            <span>{UserInfo.type || '체형 진단 결과가 없습니다'}</span>
          </UserInfoSection>
          <ActivityStatus>
            <div>
              <span>{UserInfo.result || 0}</span>
              <span>진단 결과</span>
            </div>
            <div>
              {renderLikes()}
              <span>좋아요</span>
            </div>
          </ActivityStatus>
        </UserInfoContaniner>
      </Container>
    );
  else {
    return (
      <Container>
        <div className="fetchingUserInfo">사용자 정보 불러오는 중</div>
      </Container>
    );
  }
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 11.374vh;

  .fetchingUserInfo {
    width: 100%;
    text-align: center;
    align-content: center;
  }
`;
const UserInfoContaniner = styled.div`
  display: flex;
  width: 65.13vw;
  height: 7.7vh;
  justify-content: space-between;
  margin-right: 4.128vw;
  margin-top: 2.725vh;
`;
const UserInfoSection = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > span:nth-child(1) {
    font-size: ${({ theme }) => theme.fonts.heading_bold_24px};
  }
  & > span:nth-child(2) {
    font-size: ${({ theme }) => theme.fonts.detail_medium_12px};
  }
`;
const ActivityStatus = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  gap: 3px;
  & > div:nth-child(1) {
    height: 7.7vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
  }

  & > div:nth-child(1) > span:nth-child(1) {
    font-size: ${({ theme }) => theme.fonts.heading_bold_24px};
    text-align: center;
    align-content: start;
    align-items: start;
  }

  & > div:nth-child(1) > span:nth-child(2) {
    font-size: ${({ theme }) => theme.fonts.detail_medium_12px};
  }

  & > div:nth-child(2) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    width: auto;
  }

  & > div:nth-child(2) > span:nth-child(1) {
    font-size: ${({ theme }) => theme.fonts.heading_bold_24px};
  }

  & > div:nth-child(2) > span:nth-child(2) {
    font-size: ${({ theme }) => theme.fonts.detail_medium_12px};
  }
`;

const EmptyProfile = styled.div`
  width: 20.513vw;
  margin-left: 5.128vw;
  margin-top: 1.896vh;
`;
