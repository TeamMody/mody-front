import IcLogo from '@icon/ic-logo.svg';
import CustomDivider from '@shared/ui/CustomDivider.tsx';
import styled from 'styled-components';
import React from 'react';
import { BodyImage, BodyTypeAnalysis, FeatureBasedSuggestions } from '@shared/types';
import { motion } from 'framer-motion';

interface BodyTypeContentProps {
  bodyTypeAnalysis: BodyTypeAnalysis;
  featureBasedSuggestions: FeatureBasedSuggestions;
}

const BodyTypeContent: React.FC<BodyTypeContentProps> = ({ bodyTypeAnalysis, featureBasedSuggestions }) => {
  const image = BodyImage[bodyTypeAnalysis.type];

  return (
    <>
      <MotionBodyTypeContainer
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MotionLogo
          src={IcLogo}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <MotionBodyTypeImage
          src={image}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <MotionBodyTypeText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {bodyTypeAnalysis.type} 타입
        </MotionBodyTypeText>
      </MotionBodyTypeContainer>
      <MotionDescriptionContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <CustomDivider width="100%" border="0.5px" />
        <Detail>{bodyTypeAnalysis.description}</Detail>
        <CustomDivider width="100%" border="0.5px" />
        <Bold>강조할 부분</Bold>
        <Detail>{featureBasedSuggestions.emphasize}</Detail>
        <CustomDivider width="100%" border="0.5px" />
        <Bold>보완할 부분</Bold>
        <Detail>{featureBasedSuggestions.enhance}</Detail>
      </MotionDescriptionContainer>
    </>
  );
};

export default BodyTypeContent;

const MotionBodyTypeContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotionLogo = styled(motion.img)`
  object-fit: cover;
  width: 26.7%;
  margin-top: 39px;
`;

const MotionBodyTypeImage = styled(motion.img)`
  width: 150px;
  height: 180px;
  object-fit: cover;
  margin-top: 31px;
  margin-bottom: 25px;
`;

const MotionBodyTypeText = styled(motion.p)`
  font: ${({ theme }) => theme.fonts.heading_bold_24px};
  color: ${({ theme }) => theme.colors.green500};
`;

const MotionDescriptionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 17px;
  gap: 24px;
`;

const Bold = styled.p`
  font: ${({ theme }) => theme.fonts.heading_medium_20px};
  font-weight: bold;
`;

const Detail = styled.p`
  font: ${({ theme }) => theme.fonts.body_medium_16px};
`;
