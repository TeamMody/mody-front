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
    const { myAnswers, setMyAnswer } = useAnswersStore();
    const [activeAnswers, setActiveAnswers] = useState(Array(answers.length).fill(false));
    const [selected, setSelected] = useState(false);

    const handleAnswerClick = (answerIndex: number, answer: string) => {
      const newActiveAnswers = Array(answers.length).fill(false);
      newActiveAnswers[answerIndex] = true;
      setActiveAnswers(newActiveAnswers);
      setMyAnswer(index, answer);
      setSelected(true);
    };

    if (index !== 0) {
      if (myAnswers[index - 1] === '') {
        return null;
      }
    }

    return (
      <Container ref={ref}>
        <QuestionText>{question}</QuestionText>

        {selected ? <SelectedAnswer onClick={() => setSelected(false)}>{myAnswers[index]}</SelectedAnswer>
          : <AnswersContainer>
            {answers.map((answer, answerIndex) => (
              <Answer
                key={answer.id}
                answer={answer.answer}
                imageUrl={answer.imageUrl}
                active={activeAnswers[answerIndex]} // active 상태 전달
                onClick={() => handleAnswerClick(answerIndex, answer.answer)} // 클릭 핸들러
              />
            ))}
          </AnswersContainer>
        }
      </Container>
    );
  },
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
  margin-top: 13px;
  scroll-snap-type: x mandatory;
  padding: 0 20px;
`;

const SelectedAnswer = styled.div`
  font: ${({ theme }) => theme.fonts.body_medium_16px};
  padding: 10px 16px;
  border: none;
  border-radius: 10px;
  margin: 18px 20px 0 20px;
  background-color: ${({ theme }) => theme.colors.gray600};
`;
