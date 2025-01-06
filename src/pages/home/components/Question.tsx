import { BodyTypeAnswer } from '@shared/types';
import styled from 'styled-components';
import Answer from '@home/components/Answer.tsx';

interface QuestionProps {
  question: string;
  answers: BodyTypeAnswer[];
}

const Question = ({ question, answers }: QuestionProps) => {
  return (
    <Container>
      <QuestionText>{question}</QuestionText>
      <AnswersContainer>
        {answers.map((answer) => (
          <Answer key={answer.id} {...answer} />
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
