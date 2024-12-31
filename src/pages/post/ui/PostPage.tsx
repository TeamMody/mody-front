import styled from 'styled-components';
import BottomNavigation from '../../../shared/ui/BottomNavigation.tsx';
import AppBar from '../../../shared/ui/AppBar.tsx';
import logo from '../../../shared/assets/icon/ic-logo.svg';
import plus from '../../../shared/assets/icon/ic-plus.svg';

export const PostPage = () => {
  const leftHeaderAction = { icon: logo, onClick: () => console.log('') };
  const rightHeaderActionArr = [
    { icon: plus, onClick: () => console.log('') },
  ]

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} rightHeaderActionArr={rightHeaderActionArr}/>
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
