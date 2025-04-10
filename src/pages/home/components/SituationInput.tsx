import styled from 'styled-components';
import { ChangeEvent } from 'react';

interface SituationInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SituationInput = ({ value, onChange }: SituationInputProps) => {
  return (
    <SituationInputContainer>
      <p>어떤 상황인가요?</p>
      <Input onChange={onChange} type="text" value={value} placeholder="ex) 친구 소개팅, 결혼식 하객 등" />
    </SituationInputContainer>
  );
};

export default SituationInput;

const SituationInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    margin-left: 2px;
    font: ${({ theme }) => theme.fonts.heading_bold_24px};
    color: white;
  }
`;

const Input = styled.input`
  margin-top: 5px;
  font: ${({ theme }) => theme.fonts.body_medium_16px};
  padding: 10px 16px;
  color: white;
  border-radius: 10px;
  background-color: #66666650;
  border: none;
  outline: none;

`;
