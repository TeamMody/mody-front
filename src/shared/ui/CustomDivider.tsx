import styled from 'styled-components';

interface CustomDividerProps {
  width: string;
  border: string;
}

const CustomDivider = ({ width, border }: CustomDividerProps) => {
  return <DividerDiv $width={width} $border={border}></DividerDiv>;
};
export default CustomDivider;

type DividerProps = {
  $width: string;
  $border: string;
};

const DividerDiv = styled.div<DividerProps>`
  width: ${({ $width }) => $width};
  border-bottom: ${({ $border }) => $border} solid #ffffff;
  margin-left: auto;
  margin-right: auto;
`;
