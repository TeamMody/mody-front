import { BodyTypeAnswer } from '@shared/types';
import styled from 'styled-components';
import Answer from '@home/components/Answer.tsx';
import { useAnswersStore } from '@home/feature/store/useAnswersStore.ts';
import { forwardRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface QuestionProps {
  question: string;
  answers: BodyTypeAnswer[];
  index: number;
  ref: HTMLDivElement;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const answerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.3 },
  }),
};

const Question = forwardRef<HTMLDivElement, QuestionProps>(
  ({ question, answers, index }, ref) => {
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

    if (index !== 0 && myAnswers[index - 1] === '') {
      return null;
    }

    // 동적으로 key 부여: activeAnswers 상태 변화 시 AnswersContainer 재마운트
    const answersKey = `answers-${activeAnswers.join('-')}`;

    return (
      <Container
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <QuestionText>{question}</QuestionText>
        <AnimatePresence mode="wait">
          {selected ? (
            <SelectedAnswer
              key="selected"
              onClick={() => setSelected(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.2 }}
            >
              {myAnswers[index]}
            </SelectedAnswer>
          ) : (
            <AnswersContainer
              key={answersKey}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              {answers.map((answer, answerIndex) => (
                <motion.div
                  key={`${answer.id}-${activeAnswers[answerIndex]}`}
                  custom={answerIndex}
                  variants={answerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  layout
                >
                  <Answer
                    answer={answer.answer}
                    imageUrl={answer.imageUrl}
                    active={activeAnswers[answerIndex]}
                    onClick={() => handleAnswerClick(answerIndex, answer.answer)}
                  />
                </motion.div>
              ))}
            </AnswersContainer>
          )}
        </AnimatePresence>
      </Container>
    );
  }
);

export default Question;

const Container = styled(motion.div)`
  width: 100%;
`;

const QuestionText = styled(motion.p)`
  font: ${({ theme }) => theme.fonts.heading_medium_18px};
  font-weight: bold;
  margin: 0 20px;
`;

const AnswersContainer = styled(motion.div)`
  display: flex;
  overflow-x: scroll;
  gap: 16px;
  margin-top: 13px;
  scroll-snap-type: x mandatory;
  padding: 0 20px;
`;

const SelectedAnswer = styled(motion.div)`
  font: ${({ theme }) => theme.fonts.body_medium_16px};
  padding: 10px 16px;
  border: none;
  border-radius: 10px;
  margin: 18px 20px 0 20px;
  background-color: ${({ theme }) => theme.colors.gray600};
`;
