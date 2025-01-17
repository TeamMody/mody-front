import styled from 'styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps {
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn | void; // register로 받은 객체를 그대로 전달
  isvalid: boolean;
}

const InputField = ({ placeholder, type, register, isvalid }: InputFieldProps) => {
  return (
    <Input
      autoComplete="off"
      placeholder={placeholder}
      type={type}
      {...register}
      isvalid={isvalid}
    />
  );
};

const Input = styled.input<{ isvalid: boolean }>`
  border-radius: 10px;
  border: ${({ isvalid }) => (isvalid ? 'none' : '1px solid red')};
  width: 100%;
  height: 5vh;
  text-align: center;
  color: white;
  margin-top: 0.95vh;
  background-color: ${({ theme }) => theme.colors.gray800};
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

export default InputField;
