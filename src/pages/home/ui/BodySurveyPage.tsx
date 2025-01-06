import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import IcLeftArrow from '@shared/assets/icon/ic-left-arrow.svg';
import { useNavigate } from 'react-router';
import BottomNavigation from '@shared/ui/BottomNavigation.tsx';
import Question from '@home/components/Question.tsx';
import { surveyList } from '@shared/apis/home/mocks.ts';

export const BodySurveyPage = () => {
  const navigate = useNavigate();
  const leftHeaderAction = { icon: IcLeftArrow, onClick: () => navigate(-1) };

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} title="체형 타입 분석" />
      <Container>
        <QuestionsContainer>
          {surveyList.map((survey) => (
            <Question key={survey.id} {...survey} />
          ))}
        </QuestionsContainer>
      </Container>
      <BottomNavigation />
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
`;


const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
