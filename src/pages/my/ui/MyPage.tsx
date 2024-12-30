import styled from 'styled-components';
import BottomNavigation from '../../../shared/ui/BottomNavigation.tsx';

export const MyPage = () => {
  return (
    <Wrapper>
      <h1>MyPage</h1>
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
