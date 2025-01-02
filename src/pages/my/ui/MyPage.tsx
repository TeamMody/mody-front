import styled from 'styled-components';
import BottomNavigation from '../../../shared/ui/BottomNavigation.tsx';
import AppBar from '../../../shared/ui/AppBar.tsx';
import { HeaderAction } from '../../../shared/types';
import logo from '../../../shared/assets/icon/ic-logo.svg';
import plus from '../../../shared/assets/icon/ic-plus.svg';
import hamburger from '../../../shared/assets/icon/ic-hamburger.svg';
import { ProfileHeader } from '../components/ProfileHeader.tsx';
export const MyPage = () => {
  const leftHeaderAction: HeaderAction = { icon: logo, onClick: () => console.log('') };
  const rightHeaderActionArr: HeaderAction[] = [
    { icon: plus, onClick: () => console.log('') },
    { icon: hamburger, onClick: () => console.log('') },
  ];

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} rightHeaderActionArr={rightHeaderActionArr} />
      <ProfileHeader />
      <BottomNavigation />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 440px;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.gray900};
`;
