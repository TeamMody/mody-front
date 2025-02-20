import { subBanner } from '@shared/apis/home/mocks.ts';
import SubBanner from '@home/components/SubBanner.tsx';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SubRecommendation = () => {
  return (
    <SubContainer>
      <SubBannerText
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        이런 추천은 어때요?
      </SubBannerText>
      <SubBannerContainer
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.1 },
          },
          hidden: {},
        }}
      >
        {subBanner.map((banner) => (
          <MotionSubBanner
            key={banner.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <SubBanner key={banner.id} {...banner} />
          </MotionSubBanner>
        ))}
      </SubBannerContainer>
    </SubContainer>
  );
};

export default SubRecommendation;

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
`;

const SubBannerText = styled(motion.p)`
  font: ${({ theme }) => theme.fonts.heading_bold_22px};
  margin-left: 20px;
`;

const SubBannerContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0 20px;
  gap: 16px;
`;

const MotionSubBanner = styled(motion.div)`
  scroll-snap-align: center;
`;
