import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SubBannerProps {
  imageUrl?: string;
  id: number;
  title: string;
}

const SubBanner = ({ imageUrl, title }: SubBannerProps) => {
  return (
    <Container
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
