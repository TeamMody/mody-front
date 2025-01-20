import styled from 'styled-components';

interface SubmitButtonProps {
  content: string;
  isvalid: boolean;
}

const SubmitButton = ({ content, isvalid }: SubmitButtonProps) => {
  return (
    <Button type="submit" isvalid={isvalid}>
      {content}
    </Button>
  );
};
const Button = styled.button<{ isvalid: boolean }>`
  align-self: flex-end;
  border-radius: 10px;
  width: 35.8vw;
  height: 4.7vh;
  background-color: ${({ isvalid, theme }) =>
    isvalid ? theme.colors.green500 : theme.colors.gray500};
  color: ${({ isvalid }) => (isvalid ? 'black' : 'white')};
  font-size: ${({ theme }) => theme.fonts.button_medium_16px};
`;

export default SubmitButton;
