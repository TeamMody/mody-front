import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar';
import logo from '@shared/assets/icon/ic-logo.svg';
import { HeaderAction } from '@shared/types';

export const HomePage = () => {
  const leftHeaderAction: HeaderAction = { icon: logo, onClick: () => console.log('') };

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} />
      <button>안녕</button>
    </>
  );
};
