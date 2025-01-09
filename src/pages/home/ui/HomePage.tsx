import AppBar from '@shared/ui/AppBar.tsx';
import logo from '@shared/assets/icon/ic-logo.svg';
import { HeaderAction } from '@shared/types';
import SubRecommendation from '@home/components/SubRecommendation.tsx';
import MainRecommendation from '@home/components/MainRecommendation.tsx';

export const HomePage = () => {
  const leftHeaderAction: HeaderAction = { icon: logo, onClick: () => console.log('') };

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} />
      <MainRecommendation />
      <SubRecommendation />
    </>
  );
};
