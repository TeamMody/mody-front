import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import IcLeftArrow from '@shared/assets/icon/ic-left-arrow.svg';
import { useNavigate } from 'react-router';
import Question from '@home/components/Question.tsx';
import { surveyList } from '@shared/apis/home/mocks.ts';
import { useAnswersStore } from '@home/feature/store/useAnswersStore.ts';
import CustomButton from '@shared/ui/CustomButton.tsx';
import { useCallback, useEffect, useRef } from 'react';
import { usePostBodyAnalysis } from '@home/feature/hooks/mutate/usePostBodyAnalysis.ts';
import { BodyAnalysisRequest, RecommendationType } from '@shared/types';
import { RecommendationLoading } from '@home/components/RecommendationLoading.tsx';
import debounce from 'lodash/debounce';

export const BodySurveyPage = () => {
  const navigate = useNavigate();
  const leftHeaderAction = { icon: IcLeftArrow, onClick: () => navigate(-1) };
  const { myAnswers } = useAnswersStore();
  const questionRefs = useRef<HTMLDivElement[]>([]);
  const { mutate, isSuccess, data, isPending } = usePostBodyAnalysis();

  const focusNextQuestion = () => {
    const nextUnansweredIndex = myAnswers.findIndex((answer) => answer === '');
    if (nextUnansweredIndex !== -1 && questionRefs.current[nextUnansweredIndex]) {
      questionRefs.current[nextUnansweredIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    useAnswersStore.setState({ myAnswers: Array.from({ length: surveyList.length }, () => '') });
  }, []);

  useEffect(() => {
    focusNextQuestion();
  }, [myAnswers]);

  const handleSubmit = () => {
    if (myAnswers.filter((myAnswer) => myAnswer !== '').length === surveyList.length) {
      const request: BodyAnalysisRequest = {
        answer: myAnswers.join(' '),
      };
      mutate(request);
    }
  };

  const debouncedApiRequest = useCallback(debounce(handleSubmit, 500), [handleSubmit]);

  useEffect(() => {
    if (isSuccess) {
      navigate('/body-type', { state: { result: data?.result } });
    }
  }, [isSuccess]);

  if (isPending) {
    return <RecommendationLoading type={RecommendationType.BODY_TYPE} />;
  }

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} title="체형 타입 분석" />
      <Container>
        <QuestionsContainer>
          {surveyList.map((survey, index) => (
            <Question
              key={survey.id}
              index={index}
              ref={(el) => (questionRefs.current[index] = el!)}
              {...survey}
            />
          ))}
          {myAnswers.filter((myAnswer) => myAnswer !== '').length === surveyList.length
            ? <CustomButton
              label="체형 분석하기"
              onClick={debouncedApiRequest}
              active={myAnswers.filter((myAnswer) => myAnswer !== '').length === surveyList.length}
              paddingTop="16px"
              paddingBottom="16px"
              marginHorizontal="20px"
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

`;


const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
