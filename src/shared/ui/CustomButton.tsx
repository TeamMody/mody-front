import styled from 'styled-components';

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  active: boolean;
  paddingTop: '19px' | '16px' | '10px';
  paddingBottom: '19px' | '16px' | '10px';
  marginHorizontal?: string;
}

const CustomButton = ({
  label,
  onClick,
  active,
  paddingTop,
  paddingBottom,
  marginHorizontal,
}: CustomButtonProps) => {
  return (
    <Button
      $active={active}
      $paddingTop={paddingTop}
      $paddingBottom={paddingBottom}
      onClick={active ? onClick : undefined}
      disabled={!active}
      $marginHorizontal={marginHorizontal}
    >
      {label}
    </Button>
  );
};

export default CustomButton;

type ButtonProps = {
  $active: boolean;
  $paddingTop: '19px' | '16px' | '10px';
  $paddingBottom: '19px' | '16px' | '10px';
  $marginHorizontal?: string;
};

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  margin: ${({ $marginHorizontal }) => `0 ${$marginHorizontal}`};
  color: ${({ $active }) => ($active ? 'black' : 'white')};
  font: ${({ theme }) => theme.fonts.button_medium_16px};
  padding-top: ${({ $paddingTop }) => $paddingTop};
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.green500 : theme.colors.gray500};
`;
