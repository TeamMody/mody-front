import styled from 'styled-components';
import BottomNavigation from '../../../shared/ui/BottomNavigation.tsx';
import AppBar from '../../../shared/ui/AppBar.tsx';
import logo from '../../../shared/assets/icon/ic-logo.svg';
import { HeaderAction } from '../../../shared/types';

export const HomePage = () => {
  const leftHeaderAction: HeaderAction = { icon: logo, onClick: () => console.log('') };

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} />
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
