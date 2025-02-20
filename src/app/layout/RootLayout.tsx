import { Outlet } from 'react-router';
import BottomNavigation from '@shared/ui/BottomNavigation';
import styled from 'styled-components';

export default function RootLayout() {
  /*const { isLoggedIn } = useIsLoggedInStore();
  const navigate = useNavigate();
  if (!isLoggedIn) {
    navigate('/');
  }*/

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
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  background-color: ${({ theme }) => theme.colors.gray900};
`;
