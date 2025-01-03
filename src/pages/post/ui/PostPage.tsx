import styled from 'styled-components';
import AppBar from '../../../shared/ui/AppBar.tsx';
import logo from '../../../shared/assets/icon/ic-logo.svg';
import plus from '../../../shared/assets/icon/ic-plus.svg';

export const PostPage = () => {
  const leftHeaderAction = { icon: logo, onClick: () => console.log('') };
  const rightHeaderActionArr = [{ icon: plus, onClick: () => console.log('') }];

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} rightHeaderActionArr={rightHeaderActionArr} />
    </>
  );
};
