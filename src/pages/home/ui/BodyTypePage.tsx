import styled from 'styled-components';
import CustomButton from '@shared/ui/CustomButton.tsx';
import { useLocation, useNavigate } from 'react-router';
import BodyTypeContent from '@home/components/BodyTypeContent.tsx';
import { BodyAnalysisResponse } from '@shared/types';
import { ActiveIndex, useBottomNavigationStore } from '@shared/store/useBottomNavigationStore.ts';

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
    <Wrapper>
      <BodyTypeContent bodyTypeAnalysis={result.bodyTypeAnalysis} featureBasedSuggestions={result.bodyTypeAnalysis.featureBasedSuggestions} />
      <ButtonContainer>
        <CustomButton label="완료" onClick={handleNavigate} active={true} paddingTop="19px" paddingBottom="19px" />
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 440px;
  height: 100vh;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.gray900};
  overflow-y: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
`;
