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
  hidden: {
    x: '150',    // 화면 오른쪽 밖에서 시작
    opacity: 0,
  },
  visible: {
    x: 0,         // 원위치
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
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
    const [showAnswers, setShowAnswers] = useState(true);

    const handleAnswerClick = (answerIndex: number, answer: string) => {
      const newActiveAnswers = Array(answers.length).fill(false);
      newActiveAnswers[answerIndex] = true;
      setActiveAnswers(newActiveAnswers);
      setMyAnswer(index, answer);
      setTimeout(() => {
        setShowAnswers(false);
      }, 1000);
    };

    if (index !== 0 && myAnswers[index - 1] === '') {
      return null;
    }

    return (
      <Container
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <QuestionText>{question}</QuestionText>
        <AnimatePresence mode="wait">
          {showAnswers ? (
            <AnswersContainer
              key="answers"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >
              {answers.map((answer, answerIndex) => (
                <motion.div
                  key={`${answer.id}-${activeAnswers[answerIndex]}`}
                  custom={answerIndex}
                  variants={answerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.5 } }}
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
          ) : (
            <SelectedAnswer
              key="selected"
              onClick={() => setShowAnswers(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {myAnswers[index]}
            </SelectedAnswer>
          )}
        </AnimatePresence>
      </Container>
    );
  },
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
