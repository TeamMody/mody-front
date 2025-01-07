import styled from 'styled-components';
import { useAnswersStore } from '@home/feature/store/useAnswersStore.ts';

interface AnswerProps {
  answer: string;
  index: number;
}

const Answer = ({ answer, index }: AnswerProps) => {
  const { setMyAnswer } = useAnswersStore();

  const handleClick = () => {
    setMyAnswer(index, answer);
  }

  return (
    <AnswerContainer onClick={handleClick}>
      <AnswerImage />
      <AnswerText>{answer}</AnswerText>
    </AnswerContainer>
  );
}

export default Answer;

const AnswerContainer = styled.div`
  width: 69.7vw;
  height: 26.3vh;
  flex: 0 0 auto;
  justify-items: center;
  align-content: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.gray600};
  border: none;
  border-radius: 10px;
  padding: 0 12px;
`;

const AnswerImage = styled.img`
  border: none;
  border-radius: 10px;
  width: 42.3vw;
  height: 19.5vh;
  background-color: ${({ theme }) => theme.colors.gray400};
`;

const AnswerText = styled.p`
  width: 90%;
  font: ${({ theme }) => theme.fonts.detail_medium_12px};
  text-align: center;
`;
