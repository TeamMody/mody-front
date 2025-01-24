import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import { HeaderAction, RecommendationType } from '@shared/types';
import IcLeftArrow from '@icon/ic-left-arrow.svg';
import { useLocation, useNavigate } from 'react-router';
import StyleSurvey from '@home/components/StyleSurvey.tsx';
import CustomButton from '@shared/ui/CustomButton.tsx';
import { keywords, styleKeywords } from '@shared/apis/home/mocks.ts';
import { useStyleSurveyStore } from '@home/feature/store/useStyleSurveyStore.ts';
import { useEffect } from 'react';

export const StyleSurveyPage = () => {
  const { resetKeywords } = useStyleSurveyStore();
  const { type } = useLocation().state as { type: RecommendationType };
  const navigate = useNavigate();

  useEffect(() => {
    resetKeywords();
  }, [resetKeywords]);

  const leftHeaderAction: HeaderAction = {
    icon: IcLeftArrow, onClick: () => navigate(-1),
  };

  const handleNavigate = () => {
    navigate('/recommendation-result', { state: { type: type } });
  };

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} title={type} />
      <KeywordsContainer>
        <StyleSurvey category="liked" keywords={keywords} />
        <StyleSurvey category="disliked" keywords={keywords} />
        <StyleSurvey category="image" keywords={styleKeywords} />
        <ButtonContainer>
        <CustomButton label="스타일 추천 받기" onClick={handleNavigate} active={true} paddingTop="19px" paddingBottom="19px" />
        </ButtonContainer>
      </KeywordsContainer>
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

const KeywordsContainer = styled.div`;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 16px 20px 0;
  overflow-y: auto;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  position: relative;
  bottom: 0;
`;
