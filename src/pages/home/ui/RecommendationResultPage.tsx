import AppBar from '@shared/ui/AppBar.tsx';
import { HeaderAction, RecommendationType, StyleAnalysisResponse } from '@shared/types';
import IcLeftArrow from '@icon/ic-left-arrow.svg';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import CustomButton from '@shared/ui/CustomButton.tsx';
import React, { useState } from 'react';
import ImgBannerBodyType from '@shared/assets/img/img-banner-body-type.png';
import { Loading } from '@home/components/Loading.tsx';
import IcHeart from '@icon/ic-heart.svg';
import IcHeartFill from '@icon/ic-heart-fill.svg';
import { usePostLikeEvent } from '@home/feature/hooks/mutate/usePostLikeEvent.ts';

export const RecommendationResultPage: React.FC = () => {
  const { type, result } = useLocation().state as { type: RecommendationType, result: StyleAnalysisResponse };
  const navigate = useNavigate();
  const { mutate } = usePostLikeEvent(type);
  const leftHeaderAction: HeaderAction = {
    icon: IcLeftArrow, onClick: () => navigate(-1),
  };
  const isSuccess: boolean = result !== undefined;
  const [liked, setLiked] = useState<boolean>(result.isLiked);

  const rightHeaderActions: HeaderAction[] = [
    { icon: liked ? IcHeartFill : IcHeart, onClick: () => onCLickLike() },
  ];

  const onCLickLike = () => {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
    mutate(result.styleId);
  }

  const title = type === RecommendationType.STYLE ? '스타일 추천 결과' : '패션 추천 결과';
  const isLoading = false;

  if (isLoading) {
    return <Loading type={type} />;
  }

  const description = isSuccess ? `${result.introduction}\n\n${result.styleDirection}\n\n${result.practicalStylingTips}` : '에러 발생';

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} title={title} rightHeaderActionArr={rightHeaderActions} />
      {isSuccess ? <Container>
          <Image src={ImgBannerBodyType} />
          <BoldText>{result.recommendedStyle}</BoldText>
          <Description>{description}</Description>
          <ButtonContainer>
            <CustomButton
              label="완료" onClick={() => navigate('/', { replace: true })}
              active={true}
              paddingTop="19px"
              paddingBottom="19px"
            />
          </ButtonContainer>
        </Container>
        : <div>에러 발생</div>
      }
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
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;
