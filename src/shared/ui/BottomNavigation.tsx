import { Link, useLocation } from 'react-router';
import styled from 'styled-components';
import IcHome from '../assets/icon/ic-home.tsx';
import IcInbox from '../assets/icon/ic-inbox.tsx';
import IcUser from '../assets/icon/ic-user.tsx';
import { ActiveProps } from '../types';

const BottomNavigation = () => {
  const location = useLocation();

  const isActiveState = (path: string) => location.pathname === path;

  return (
    <Wrapper>
      <Container>
        <BottomLink to="/" $active={isActiveState('/home')}>
          <IcHome $active={isActiveState('/home')} />홈
        </BottomLink>
        <BottomLink to="/post" $active={isActiveState('/post')}>
          <IcInbox $active={isActiveState('/post')} />
          비슷
        </BottomLink>
        <BottomLink to="/my" $active={isActiveState('/my')}>
          <IcUser $active={isActiveState('/my')} />내 정보
        </BottomLink>
      </Container>
    </Wrapper>
  );
};

export default BottomNavigation;

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100vw;
  max-width: 440px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 88px;
  background-color: ${({ theme }) => theme.colors.gray850};
  justify-content: space-between;
  padding: 8px 41px 0 41px;
`;

const BottomLink = styled(Link)<ActiveProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${({ theme, $active }) => ($active ? theme.colors.green500 : 'white')};
  text-decoration: none;
  font: ${({ theme }) => theme.fonts.caption_medium_14px};

  &:hover {
    color: ${({ theme, $active }) => ($active ? theme.colors.green500 : 'white')};
  }
`;
