import { BodyTypeAnswer } from '@shared/types';
import styled from 'styled-components';
import Answer from '@home/components/Answer.tsx';
import { useAnswersStore } from '@home/feature/store/useAnswersStore.ts';
import { forwardRef, useState } from 'react';

interface QuestionProps {
  question: string;
  answers: BodyTypeAnswer[];
  index: number;
  ref: HTMLDivElement;
}

const Question = forwardRef<HTMLDivElement, QuestionProps>(({ question, answers, index }, ref) => {
  const { myAnswers } = useAnswersStore();
  const [selected, setSelected] = useState(false);

  const changeVisible = () => {
    setSelected(!selected);
  };

  if (index !== 0) {
    if (myAnswers[index - 1] === '') {
      return null;
    }
  }

  return (
    <Container ref={ref}>
      <QuestionText>{question}</QuestionText>
      {!selected
        ? <AnswersContainer>
          {answers.map((answer) => (
            <Answer key={answer.id} index={index} {...answer} onClick={changeVisible} />
          ))}
        </AnswersContainer>
        : <SelectedAnswer onClick={changeVisible}>{myAnswers[index]}</SelectedAnswer>
      }
    </Container>
  );
}
);

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
