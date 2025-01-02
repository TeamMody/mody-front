import React from 'react';
import styled from 'styled-components';
import { UserInfo } from '../features/mocks/userInfo';
import { UserImg } from './UserImg';
export const ProfileHeader = () => {
  const type: string = UserInfo?.type ? UserInfo?.type : '체형 진단 결과가 없습니다';
  return (
    <Container>
      <UserImg img={UserInfo?.img} width="80px" height="80px" />
      <div>
        <UserInfoSection>
          <div>{UserInfo?.name}</div>
          <div>{type}</div>
        </UserInfoSection>
        <ActivityStatus>
          <div>
            <span>{UserInfo?.result}</span>
            <span>진단 결과</span>
          </div>
          <div>
            <span>{UserInfo?.like / 10000}만</span>
            <span>좋아요</span>
          </div>
        </ActivityStatus>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  & > div {
    display: flex;
    width: 254px;
    height: 65px;
    justify-content: space-between;
    margin-left: 16px;
    margin-top: 23px;
  }
`;

const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div:nth-child(1) {
    font-size: ${({ theme }) => theme.fonts.heading_bold_24px};
  }
  & > div:nth-child(2) {
    font-size: ${({ theme }) => theme.fonts.detail_medium_12px};
  }
`;
const ActivityStatus = styled.div`
  width: 101px;
  height: 65px;
  display: flex;
  justify-content: space-between;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & > div:nth-child(1) > span:nth-child(1) {
    font-size: ${({ theme }) => theme.fonts.heading_bold_24px};
  }

  & > div:nth-child(1) > span:nth-child(2) {
    font-size: ${({ theme }) => theme.fonts.detail_medium_12px};
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & > div:nth-child(2) > span:nth-child(1) {
    font-size: ${({ theme }) => theme.fonts.heading_bold_24px};
  }

  & > div:nth-child(2) > span:nth-child(2) {
    font-size: ${({ theme }) => theme.fonts.detail_medium_12px};
  }
`;
