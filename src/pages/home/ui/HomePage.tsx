import AppBar from '@shared/ui/AppBar.tsx';
import logo from '@shared/assets/icon/ic-logo.svg';
import { HeaderAction } from '@shared/types';
import SubRecommendation from '@home/components/SubRecommendation.tsx';
import MainRecommendation from '@home/components/MainRecommendation.tsx';
import { useGetMyInfo } from '@shared/hooks/useGetMyInfo.ts';
import { useMyInfoStore } from '@shared/store/useMyInfoStore.ts';
import { useEffect } from 'react';

export const HomePage = () => {
  const { myInfo, setMyInfo } = useMyInfoStore();
  const { data, isSuccess } = useGetMyInfo();
  const leftHeaderAction: HeaderAction = { icon: logo, onClick: () => console.log('') };

  useEffect(() => {
    if (data && isSuccess && data?.result !== myInfo) {
      setMyInfo(data?.result);
    }
  }, [isSuccess, data?.result, setMyInfo]);

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} />
      <MainRecommendation />
      <SubRecommendation />
    </>
  );
};
