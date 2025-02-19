import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { RecommendationType } from '@shared/types';
import { useMyInfoStore } from '@shared/store/useMyInfoStore.ts';

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
      <Type>{type}</Type>
      <Title>{title}</Title>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div<{ $imageUrl: string }>`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 40vh;
  width: 100%;
  border: none;
  border-radius: 15px;
  padding: 14px 17px;
  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  gap: 8px;
  scroll-snap-align: center;
  transition: transform 0.3s ease;
`;

const Type = styled.p`
  font: ${({ theme }) => theme.fonts.body_bold_16px};
`;

const Title = styled.p`
  font: ${({ theme }) => theme.fonts.heading_bold_22px};
`;
