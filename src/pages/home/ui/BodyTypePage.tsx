import styled from 'styled-components';
import CustomButton from '@shared/ui/CustomButton.tsx';
import { useLocation, useNavigate } from 'react-router';
import BodyTypeContent from '@home/components/BodyTypeContent.tsx';
import { BodyAnalysisResponse } from '@shared/types';
import { ActiveIndex, useBottomNavigationStore } from '@shared/store/useBottomNavigationStore.ts';
import { motion } from 'framer-motion';

export const BodyTypePage = () => {
  const { activeIndex } = useBottomNavigationStore();
  const navigate = useNavigate();
  const { result } = useLocation().state as { result: BodyAnalysisResponse };

  const handleNavigate = () => {
    const url = activeIndex === ActiveIndex.HOME ? '/home' : '/my';
    navigate(url, { replace: true });
  };

  if (!result) {
    alert('체형 타입 분석 결과가 없습니다.');
    navigate('/home', { replace: true });
  }

  return (
    <Wrapper
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BodyTypeContent bodyTypeAnalysis={result.bodyTypeAnalysis} featureBasedSuggestions={result.bodyTypeAnalysis.featureBasedSuggestions} />
      <ButtonContainer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <CustomButton label="완료" onClick={handleNavigate} active={true} paddingTop="19px" paddingBottom="19px" />
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 440px;
  height: 100vh;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.gray900};
  overflow-y: auto;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
`;
