import styled from 'styled-components';
import React from 'react';
import { ActiveProps } from '@shared/types';

interface AnswerProps {
  answer: string;
  imageUrl?: React.FC<React.SVGProps<SVGSVGElement>>;
  active: boolean;
  onClick: () => void;
}

const Answer = ({ answer, imageUrl, active, onClick }: AnswerProps) => {
  return (
    <Wrapper onClick={onClick}>
      <AnswerContainer $active={active}>
        <StyledIcon as={imageUrl} $active={active} />
      </AnswerContainer>
      <AnswerText>{answer}</AnswerText>
    </Wrapper>
  );
};

export default Answer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 208px;
  height: 272px;
  gap: 16px;
  flex: 0 0 auto;
`;

const AnswerContainer = styled.div<ActiveProps>`
  width: 100%;
  height: 208px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $active, theme }) => $active ? theme.colors.green900 : theme.colors.gray800};
  border: 1px solid ${({ $active, theme }) => $active ? theme.colors.green500 : 'white'};
  border-radius: 10px;
  padding: 0 12px;
`;

const StyledIcon = styled.svg<{ $active: boolean }>`
  path {
    fill: ${({ $active, theme }) => ($active ? theme.colors.green500 : 'white')} !important;
  }
`;

const AnswerText = styled.p`
  width: 90%;
  white-space: pre-wrap;
  font: ${({ theme }) => theme.fonts.body_medium_16px};
  text-align: center;
`;
