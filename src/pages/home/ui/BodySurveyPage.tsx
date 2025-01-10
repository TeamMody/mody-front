import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import IcLeftArrow from '@shared/assets/icon/ic-left-arrow.svg';
import { useLocation, useNavigate } from 'react-router';
import Question from '@home/components/Question.tsx';
import { surveyList } from '@shared/apis/home/mocks.ts';
import { useAnswersStore } from '@home/feature/store/useAnswersStore.ts';
import CustomButton from '@shared/ui/CustomButton.tsx';
import { useEffect } from 'react';
import { RecommendationType } from '@shared/types';

export const BodySurveyPage = () => {
  const { type } = useLocation().state as { type: RecommendationType };
  const navigate = useNavigate();
  const leftHeaderAction = { icon: IcLeftArrow, onClick: () => navigate(-1) };
  const { myAnswers } = useAnswersStore();

  useEffect(() => {
    useAnswersStore.setState({ myAnswers: Array.from({ length: surveyList.length }, () => '') });
  }, []);

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} title="체형 타입 분석" />
      <Container>
        <QuestionsContainer>
          {surveyList.map((survey, index) => (
            <Question
              key={survey.id}
              index={index}
              {...survey}
            />
          ))}
          {myAnswers.filter((myAnswer) => myAnswer !== '').length === surveyList.length
            ? <CustomButton
              label="체형 분석하기"
              onClick={() => navigate('/loading', { state: { type: type } })}
              active={true}
              paddingTop="16px"
              paddingBottom="16px"
              marginHorizontal='20px'
            />
            : null
          }
        </QuestionsContainer>
      </Container>
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

const Container = styled.div`
  padding-top: 20px;
  overflow-y: scroll;
  height: 100%;
  align-content: center;
`;


const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 3vh;
`;
