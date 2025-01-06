import styled from 'styled-components';
export const IcRightArrow = () => {
  return (
    <Svgstyle
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 7L1 7M15 7L9 13M15 7L9 1"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svgstyle>
  );
};

const Svgstyle = styled.svg`
  &:hover {
    & > path {
      stroke: ${({ theme }) => theme.colors.green500};
    }
  }
`;
