import styled from 'styled-components';
import { MoonLoader } from 'react-spinners';

interface SubmitButtonProps {
  content: string;
  isvalid: boolean;
  isLoading?: boolean;
}

const SubmitButton = ({ content, isvalid, isLoading }: SubmitButtonProps) => {
  return (
    <Button type="submit" isvalid={isvalid} disabled={isLoading}>
      {isLoading ? <MoonLoader color='black' size="20px" /> : content}
    </Button>
  );
};
const Button = styled.button<{ isvalid: boolean }>`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 35.8vw;
  height: 4.7vh;
  background-color: ${({ isvalid, theme }) =>
    isvalid ? theme.colors.green500 : theme.colors.gray500};
  color: ${({ isvalid }) => (isvalid ? 'black' : 'white')};
  font-size: ${({ theme }) => theme.fonts.button_medium_16px};
`;

export default SubmitButton;
