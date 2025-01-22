import styled from 'styled-components';

const TypeLetter = ({ type }: { type: string }) => {
  return <Type>{type}</Type>;
};

const Type = styled.div`
  align-self: flex-start;
  font-size: ${({ theme }) => theme.fonts.body_bold_16px};
  color: white;
`;

export default TypeLetter;
