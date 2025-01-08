import styled from 'styled-components';
import { UserInfo } from '@pages/my/features/mocks/userInfo';
import { UserImg } from '@pages/my/components/UserImg';
import { IcEmptyProfile } from '@shared/assets/icon/ic-emptyProfileIcon';
export const ProfileHeader = () => {
  const renderLikes = () => {
    const like = UserInfo?.like;

    if (like === undefined) {
      return <SpanStyle>0</SpanStyle>;
    } else if (like >= 10000) {
      return <SpanStyle>{Math.floor(like / 10000)}만</SpanStyle>;
    } else if (like >= 1000) {
      return <SpanStyle>{(like / 10000).toFixed(1)}만</SpanStyle>;
    } else {
      return <SpanStyle>{like}</SpanStyle>;
    }
  };

  if (UserInfo)
    return (
      <Container>
        {UserInfo.img ? (
          <UserImg img={UserInfo.img} width="80px" height="80px" />
        ) : (
          <EmptyProfile>
            <IcEmptyProfile width="80px" height="80px" />
          </EmptyProfile>
        )}
        <UserInfoContaniner>
          <UserInfoSection>
            <div className="responsive-div">{UserInfo.name}</div>
            <div>{UserInfo.type || '체형 진단 결과가 없습니다'}</div>
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
  height: 96px;

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
  margin-right: 20px;
  margin-top: 23px;
`;
const UserInfoSection = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div:nth-child(1) {
    font-size: ${({ theme }) => theme.fonts.heading_bold_24px};
    transiton: font-size 0.2 ease;
  }
  & > div:nth-child(2) {
    font-size: ${({ theme }) => theme.fonts.detail_medium_12px};
  }
`;
const ActivityStatus = styled.div`
  width: auto;
  height: 65px;
  display: flex;
  justify-content: space-between;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
  }

  & > div:nth-child(1) > span:nth-child(1) {
    font-size: ${({ theme }) => theme.fonts.heading_bold_24px};
    text-align: center;
  }

  & > div:nth-child(1) > span:nth-child(2) {
    font-size: ${({ theme }) => theme.fonts.detail_medium_12px};
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    width: auto;
  }

  & > div:nth-child(2) > span:nth-child(1) {
    font-size: ${({ theme }) => theme.fonts.heading_bold_24px};
    display: inline-block;
  }

  & > div:nth-child(2) > span:nth-child(2) {
    font-size: ${({ theme }) => theme.fonts.detail_medium_12px};
  }
`;

const EmptyProfile = styled.div`
  width: 80px;
  margin-left: 20px;
  margin-top: 16px;
`;

const SpanStyle = styled.span`
  width: auto;
  box-sizing: border-box;
  white-space: nowrap;
`;
