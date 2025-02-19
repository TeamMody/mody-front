import AppBar from '@shared/ui/AppBar.tsx';
import { HeaderAction, RecommendationResponse, RecommendationType } from '@shared/types';
import IcLeftArrow from '@icon/ic-left-arrow.svg';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import CustomButton from '@shared/ui/CustomButton.tsx';
import React, { useState } from 'react';
import { RecommendationLoading } from '@home/components/RecommendationLoading.tsx';
import IcHeart from '@icon/ic-heart.svg';
import IcHeartFill from '@icon/ic-heart-fill.svg';
import { usePostLikeEvent } from '@home/feature/hooks/mutate/usePostLikeEvent.ts';
import { ActiveIndex, useBottomNavigationStore } from '@shared/store/useBottomNavigationStore.ts';
import { motion } from 'framer-motion';

export const RecommendationResultPage: React.FC = () => {
  const { type, result } = useLocation().state as { type: RecommendationType, result: RecommendationResponse };
  const navigate = useNavigate();
  const { activeIndex } = useBottomNavigationStore();
  const { mutate } = usePostLikeEvent();
  const leftHeaderAction: HeaderAction = {
    icon: IcLeftArrow, onClick: () => navigate(-1),
  };
  const isSuccess: boolean = result !== undefined;
  const [liked, setLiked] = useState<boolean>(result.liked);

  const rightHeaderActions: HeaderAction[] = [
    { icon: liked ? IcHeartFill : IcHeart, onClick: () => onCLickLike() },
  ];

  const onCLickLike = () => {
    setLiked((prev) => !prev);
    mutate(result.recommendationId);
  };

  const title = type === RecommendationType.STYLE ? '스타일 추천 결과' : '패션 추천 결과';
  const isLoading = false;

  if (isLoading) {
    return <RecommendationLoading type={type} />;
  }

  const content = type === RecommendationType.STYLE ? JSON.parse(result.content) : result.content;
  const description = type === RecommendationType.STYLE ? `${content.introduction}\n\n${content.practicalStylingTips}\n\n${content.styleDirection}` : content;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  };

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} title={title} rightHeaderActionArr={rightHeaderActions} />
      {isSuccess ? <Container initial="hidden" animate="visible" variants={containerVariants}>
          <Image src={result.imageUrl} variants={imageVariant} />
          <BoldText variants={childVariants}>{result.title}</BoldText>
          <Description variants={childVariants}>{description}</Description>
          <ButtonContainer variants={childVariants}>
            <CustomButton
              label="완료" onClick={() => navigate(activeIndex === ActiveIndex.HOME ? '/home' : '/my', { replace: true })}
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

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  overflow-y: scroll;
  height: 100%;
`;

const Image = styled(motion.img)`
  border-radius: 10px;
  width: 100%;
  margin-top: 32px;
  object-fit: fill;
  object-position: center;
`;

const BoldText = styled(motion.p)`
  font: ${({ theme }) => theme.fonts.heading_bold_24px};
  margin-top: 16px;
`;

const Description = styled(motion.p)`
  font: ${({ theme }) => theme.fonts.body_medium_16px};
  width: 100%;
  white-space: pre-wrap;
  margin-top: 26px;
  margin-bottom: 40px;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;
