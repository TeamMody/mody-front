import styled from 'styled-components';
import BottomNavigation from '../../../shared/ui/BottomNavigation.tsx';

export const HomePage = () => {
  return (
    <Wrapper>
      <h1>fdasdsafdfsa</h1>
      <button>안녕</button>
      <BottomNavigation />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;;
  flex-direction: column;
  width: 100vw;
  max-width: 440px;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.gray900};
`;
