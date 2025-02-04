import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { RecommendationType } from '@shared/types';

interface BannerProps {
  type: RecommendationType;
  title: string;
  imageUrl: string;
  isFocused?: boolean;
}

const Banner = ({ type, title, imageUrl, isFocused }: BannerProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    switch (type) {
      case RecommendationType.BODY_TYPE:
        navigate('/body-survey', { state: { type: RecommendationType.BODY_TYPE } });
        break;
      case RecommendationType.STYLE:
        navigate('/recommendations-survey', { state: { type: RecommendationType.STYLE } });
        break;
      case RecommendationType.FASHION:
        navigate('/recommendations-survey', { state: { type: RecommendationType.FASHION } });
        break;
      default:
        break;
    }
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
