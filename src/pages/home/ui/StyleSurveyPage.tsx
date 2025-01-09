import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import { HeaderAction, RecommendationType } from '@shared/types';
import IcLeftArrow from '@icon/ic-left-arrow.svg';
import { useLocation, useNavigate } from 'react-router';
import StyleSurvey from '@home/components/StyleSurvey.tsx';
import CustomButton from '@shared/ui/CustomButton.tsx';
import { keywords, styleKeywords } from '@shared/apis/home/mocks.ts';

export const StyleSurveyPage = () => {
  const { type } = useLocation().state as { type: RecommendationType };
  const navigate = useNavigate();
  const leftHeaderAction: HeaderAction = {
    icon: IcLeftArrow, onClick: () => navigate(-1),
  };

  const handleNavigate = () => {
      navigate('/loading', { state: { type: type } });
  }

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} title={type} />
      <KeywordsContainer>
        <StyleSurvey title='선호하는 패션 스타일' keywords={keywords} />
        <StyleSurvey title='싫어하는 패션 스타일' keywords={keywords} />
        <StyleSurvey title='보여지고 싶은 이미지' keywords={styleKeywords} />
        <CustomButton label='스타일 추천 받기' onClick={handleNavigate} active={true} paddingTop='19px' paddingBottom='19px' />
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
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 16px 20px 0;
`;
