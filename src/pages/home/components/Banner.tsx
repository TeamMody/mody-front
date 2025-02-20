import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { RecommendationType } from '@shared/types';
import { useMyInfoStore } from '@shared/store/useMyInfoStore.ts';
import { motion } from 'framer-motion';

interface BannerProps {
  type: RecommendationType;
  title: string;
  imageUrl: string;
  isFocused?: boolean;
}

const Banner = ({ type, title, imageUrl, isFocused }: BannerProps) => {
  const navigate = useNavigate();
  const { myInfo } = useMyInfoStore();

  const handleNavigate = () => {
    switch (type) {
      case RecommendationType.BODY_TYPE:
        navigate('/body-survey', { state: { type: RecommendationType.BODY_TYPE } });
        break;
      case RecommendationType.STYLE:
        hasBodyType() ? navigate('/recommendations-survey', { state: { type: RecommendationType.STYLE } }) : alert('추천을 위해선 체형 타입 정보가 필요해요!\n체형 타입 분석을 먼저 해주세요!');
        break;
      case RecommendationType.FASHION_ITEM:
        hasBodyType() ? navigate('/recommendations-survey', { state: { type: RecommendationType.FASHION_ITEM } }) : alert('추천을 위해선 체형 타입 정보가 필요해요!\n체형 타입 분석을 먼저 해주세요!');
        break;
      default:
        break;
    }
  };

  const hasBodyType = (): boolean => {
    return myInfo?.bodyType !== null;
  };

  return (
    <BannerContainer
      $imageUrl={imageUrl}
      onClick={handleNavigate}
      style={{ transform: `scale(${isFocused ? 1 : 0.95})` }}
    >
      <MotionType
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {type}
      </MotionType>
      <MotionTitle
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {title}
      </MotionTitle>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div<{ $imageUrl: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 40vh;
  border: none;
  border-radius: 15px;
  padding: 14px 17px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 30%, rgba(0, 0, 0)),
  url(${({ $imageUrl }) => $imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  gap: 8px;
  scroll-snap-align: center;
  transition: transform 0.3s ease;
`;

const MotionType = styled(motion.p)`
  font: ${({ theme }) => theme.fonts.body_bold_16px};
`;

const MotionTitle = styled(motion.p)`
  font: ${({ theme }) => theme.fonts.heading_bold_22px};
`;
