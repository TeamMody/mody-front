import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import { HeaderAction } from '@shared/types';
import logo from '@shared/assets/icon/ic-logo.svg';
import plus from '@shared/assets/icon/ic-plus.svg';
import hamburger from '@shared/assets/icon/ic-hamburger.svg';
import { MyPageContentLayout } from '@pages/my/components/MyPageContentLayout';
import { useNavigate } from 'react-router';
import { Loading } from '@shared/ui/Loading.tsx';
import Profile from '@my/components/Profile.tsx';
import { useControlModal } from '@my/features/hooks/useControlModal.ts';
import { useGetMyInfo } from '@shared/hooks/useGetMyInfo.ts';

export const MyPage = () => {
  const navigate = useNavigate();
  const { modalState, closeModal, openModal } = useControlModal();
  const { data: fetchedInfo, isLoading } = useGetMyInfo();
  const leftHeaderAction: HeaderAction = { icon: logo, onClick: () => navigate('/home') };
  const rightHeaderActionArr: HeaderAction[] = [
    { icon: plus, onClick: () => fetchedInfo?.result.bodyType ? navigate('createPost') : alert('체형 분석 이후 게시글 업로드가 가능합니다!') },
    {
      icon: hamburger,
      onClick: openModal,
    },
  ];

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} rightHeaderActionArr={rightHeaderActionArr} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Profile
            modalState={modalState}
            closeModal={closeModal}
            fetchedInfo={fetchedInfo?.result!}
          />
          <MyPageContentLayout />
        </>
      )}
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
