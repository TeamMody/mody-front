import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import { HeaderAction } from '@shared/types';
import logo from '@shared/assets/icon/ic-logo.svg';
import plus from '@shared/assets/icon/ic-plus.svg';
import hamburger from '@shared/assets/icon/ic-hamburger.svg';
import { MyPageContentLayout } from '@pages/my/components/MyPageContentLayout';
import { MyBodyTypeCard } from '@pages/my/components/MyBodyTypeCard';
import { ProfileHeader } from '@pages/my/components/ProfileHeader';
import { SettingModal } from '@pages/my/components/modal/SettingModal';
import { useNavigate } from 'react-router';
import { profileDataType } from '@my/types';
import { myProfileHeader } from '@my/apis/myProfileHeader';

export const MyPage = () => {
  const [modalState, setModalState] = useState<boolean>(false);
  const navigate = useNavigate();
  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  const leftHeaderAction: HeaderAction = { icon: logo, onClick: () => navigate('/home') };
  const rightHeaderActionArr: HeaderAction[] = [
    { icon: plus, onClick: () => navigate('createPost') },
    {
      icon: hamburger,
      onClick: openModal,
    },
  ];

  const [profileData, setProfileData] = useState<profileDataType>();
  useEffect(() => {
    const fetchProfileData = async () => {
      const data = await myProfileHeader();
      setProfileData(data);
    };
    fetchProfileData();
  }, []);

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} rightHeaderActionArr={rightHeaderActionArr} />
      <SettingModal isOpened={modalState} onClose={closeModal} />
      {profileData && <ProfileHeader profileData={profileData} />}
      <MyBodyTypeCard />
      <MyPageContentLayout />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 440px;
  height: 91vh; //내비게이션바 높이만큼 빼줌
  background-color: ${({ theme }) => theme.colors.gray900};
`;
