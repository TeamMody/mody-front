import { Outlet } from 'react-router';
import BottomNavigation from '@shared/ui/BottomNavigation.tsx';
import styled from 'styled-components';

export default function RootLayout() {
  return (
    <Wrapper>
      <Outlet />
      <BottomNavigation />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 440px;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.gray900};
`;
