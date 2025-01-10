import AppBar from '@shared/ui/AppBar.tsx';
import { HeaderAction, RecommendationType } from '@shared/types';
import IcLeftArrow from '@icon/ic-left-arrow.svg';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import CustomButton from '@shared/ui/CustomButton.tsx';
import React from 'react';
import ImgBannerBodyType from '@shared/assets/img/img-banner-body-type.png';

const description = '심플하고 깔끔한 라인을 강조하며, 몸의 곡선을 자연스럽게 보여주는 스타일입니다. 목선이 돋보이는 브이넥 블라우스나 스퀘어넥 탑과 구조적인 숄더 라인이 돋보이는 재킷을 매치합니다. 하의는 하이 웨이스트 슬랙스나 펜슬 스커트를 활용해 다리 길이를 시각적으로 길게 보이게 합니다.\n\n이 지적인 이미지와 차분한 분위기를 잘 표현할 수 있습니다. 미니멀한 디자인은 깔끔한 체형의 강점을 살려주며, 여성스럽고 청순한 이미지를 강조합니다.';

export const RecommendationResultPage: React.FC = () => {
  const { type } = useLocation().state as { type: RecommendationType };
  const navigate = useNavigate();
  const leftHeaderAction: HeaderAction = {
    icon: IcLeftArrow, onClick: () => navigate(-1),
  };

  const title = type === RecommendationType.STYLE ? '스타일 추천 결과' : '패션 추천 결과';

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} title={title} />
      <Container>
        <Image src={ImgBannerBodyType} />
        <BoldText>모던 미니멀</BoldText>
        <Description>{description}</Description>
      </Container>
      <ButtonContainer>
        <CustomButton
          label="완료" onClick={() => navigate('/', { replace: true })}
          active={true}
          paddingTop="19px"
          paddingBottom="19px"
        />
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 440px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray900};
`;

const Container = styled.div`
  padding: 0 20px;
  overflow-y: scroll;
  height: 100%;
`;

const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 33vh;
  margin-top: 32px;
  object-fit: cover;
  object-position: top;
`;

const BoldText = styled.p`
  font: ${({ theme }) => theme.fonts.heading_bold_24px};
  margin-top: 16px;
`;

const Description = styled.p`
  font: ${({ theme }) => theme.fonts.body_medium_16px};
  width: 100%;
  white-space: pre-wrap;
  margin-top: 26px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 20px;
`;
