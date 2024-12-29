import styled from 'styled-components';

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  active: boolean;
  paddingTop: '19px' | '10px';
  paddingBottom: '19px' | '10px';
}

const CustomButton = ({ label, onClick, active, paddingTop, paddingBottom }: CustomButtonProps) => {
  return (
    <Button
      $active={active}
      $paddingTop={paddingTop}
      $paddingBottom={paddingBottom}
      onClick={active ? onClick : undefined}
      disabled={!active}
    >{label}
    </Button>
  );
};

export default CustomButton;

type ButtonProps = {
  $active: boolean;
  $paddingTop: '19px' | '10px';
  $paddingBottom: '19px' | '10px';
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  color: ${({ theme, $active }) => $active ? 'black' : theme.colors.gary150};
  font: ${({ theme }) => theme.fonts.button_medium_16px};
  padding-top: ${({ $paddingTop }) => $paddingTop};
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom};
  background-color: ${({ theme, $active }) => $active ? theme.colors.green500 : theme.colors.gra};
`;
