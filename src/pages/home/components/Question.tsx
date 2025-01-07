import { BodyTypeAnswer } from '@shared/types';
import styled from 'styled-components';
import Answer from '@home/components/Answer.tsx';
import { useAnswersStore } from '@home/feature/store/useAnswersStore.ts';

interface QuestionProps {
  question: string;
  answers: BodyTypeAnswer[];
  index: number;
}

const Question = ({ question, answers, index }: QuestionProps) => {
  const { myAnswers } = useAnswersStore();

  if (index !== 0) {
    if (myAnswers[index - 1] === '') {
      return null;
    }
  }

  if (myAnswers[index] !== '') {
    return (
      <Container>
        <QuestionText>{question}</QuestionText>
        <SelectedAnswer>{myAnswers[index]}</SelectedAnswer>
      </Container>
    );
  }

  return (
    <Container>
      <QuestionText>{question}</QuestionText>
      <AnswersContainer>
        {answers.map((answer) => (
          <Answer key={answer.id} index={index} {...answer} />
        ))}
      </AnswersContainer>
    </Container>
  );
};

export default Question;

const Container = styled.div`
  width: 100%;
`;

const QuestionText = styled.p`
  font: ${({ theme }) => theme.fonts.heading_medium_18px};
  font-weight: bold;
  margin: 0 20px;
`;

const AnswersContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 16px;
  scroll-snap-type: x mandatory;
  padding: 0 59px;
`;

const SelectedAnswer = styled.div`
  font: ${({ theme }) => theme.fonts.body_medium_16px};
  padding: 10px 16px;
  border: none;
  border-radius: 10px;
  margin: 18px 20px 0 20px;
  background-color: ${({ theme }) => theme.colors.gray600};
`;
