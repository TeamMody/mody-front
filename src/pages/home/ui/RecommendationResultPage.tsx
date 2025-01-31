import AppBar from '@shared/ui/AppBar.tsx';
import { HeaderAction, RecommendationType, StyleAnalysisResponse } from '@shared/types';
import IcLeftArrow from '@icon/ic-left-arrow.svg';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import CustomButton from '@shared/ui/CustomButton.tsx';
import React from 'react';
import ImgBannerBodyType from '@shared/assets/img/img-banner-body-type.png';
import { Loading } from '@home/components/Loading.tsx';

export const RecommendationResultPage: React.FC = () => {
  const { type, result } = useLocation().state as { type: RecommendationType, result: StyleAnalysisResponse };
  const navigate = useNavigate();
  const leftHeaderAction: HeaderAction = {
    icon: IcLeftArrow, onClick: () => navigate(-1),
  };

  const title = type === RecommendationType.STYLE ? '스타일 추천 결과' : '패션 추천 결과';
  const isLoading = false;

  if (isLoading) {
    return <Loading type={type} />
  }

  console.log(result);

  const style = result.styleRecommendations[0];

  const description = `${style.introduction}\n\n ${style.styleDirection}\n\n ${style.practicalStylingTips}\n`;

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} title={title} />
      <Container>
        <Image src={ImgBannerBodyType} />
        <BoldText>{style.recommendationStyle}</BoldText>
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
  padding: 0 20px;
`;
