import styled from 'styled-components';

export const IcLeftArrow = () => {
  return (
    <SvgStyle
      width="12"
      height="21"
      viewBox="0 0 12 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2L2 10.5L10 19"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgStyle>
  );
};

const SvgStyle = styled.svg`
  &:hover {
    & > path {
      stroke: ${({ theme }) => theme.colors.green500};
    }
  }
`;
