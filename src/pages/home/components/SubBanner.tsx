import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { SubRecommendationType } from '@shared/types';

interface SubBannerProps {
  imageUrl?: string;
  type: SubRecommendationType;
  id: number;
  title: string;
}

const SubBanner = ({ type, imageUrl, title }: SubBannerProps) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    switch (type) {
      case SubRecommendationType.WEATHER: {
        navigate('/weather-survey', { state: { type: SubRecommendationType.WEATHER } });
        break;
      }
      case SubRecommendationType.SITUATION: {
        navigate('/situation-survey', { state: { type: SubRecommendationType.SITUATION } });
        break;
      }
    }
  };

  return (
    <Container
      onClick={handleNavigate}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <SubBannerImage src={imageUrl} />
      <Title>{title}</Title>
    </Container>
  );
};

export default SubBanner;

const Container = styled(motion.div)`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 7px;
  width: 42.8vw;
  height: 21vh;
  min-height: 173px;
  scroll-snap-align: center;
`;

const SubBannerImage = styled(motion.img)`
  width: 100%;
  height: 68%;
  border-radius: 10px;
  border: none;
`;

const Title = styled(motion.p)`
  font: ${({ theme }) => theme.fonts.body_bold_16px};
  white-space: pre-wrap;
`;
