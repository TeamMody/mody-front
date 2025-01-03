import { IcRightArrow } from '../../../shared/assets/icon/ic-right-arrow';
import styled from 'styled-components';
export const MyBodyTypeCard = () => {
  return (
    <Container>
      <MyBodyType>
        <span>나의 체형 타입은?</span>
        <span>나의 체형 진단 받으러 가기</span>
      </MyBodyType>
      <IcRightArrow />
    </Container>
  );
};

const Container = styled.div`
  width: 349px;
  height: 68px;
  margin-top: 16px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10.5px 17px 10.5px 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const MyBodyType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > span:nth-child(1) {
    font-size: ${({ theme }) => theme.fonts.body_bold_16px};
  }
  & > span:nth-child(2) {
    font-size: ${({ theme }) => theme.fonts.detail_medium_12px};
  }
`;
