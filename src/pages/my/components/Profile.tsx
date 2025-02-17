import { SettingModal } from '@my/components/modal/SettingModal.tsx';
import { ProfileHeader } from '@my/components/ProfileHeader.tsx';
import { MyBodyTypeCard } from '@my/components/MyBodyTypeCard.tsx';
import { useGetBodyTypeResult } from '@my/features/hooks/mutate/useGetBodyTypeResult.ts';
import { MemberInfo } from '@shared/types';

interface ProfileProps {
  modalState: boolean;
  closeModal: () => void;
  fetchedInfo: MemberInfo;
}

const Profile = ({ modalState, closeModal, fetchedInfo }: ProfileProps) => {
  const { data } = useGetBodyTypeResult(fetchedInfo?.id!);
  return (
    <>
      <SettingModal
        isOpened={modalState}
        onClose={closeModal}
        profileImg={fetchedInfo?.profileImageUrl}
      />
      {fetchedInfo && <ProfileHeader myInfo={fetchedInfo} />}
      <MyBodyTypeCard
        img={fetchedInfo?.profileImageUrl}
        bodyType={fetchedInfo?.bodyType}
        data={data?.result}
      />
    </>
  );
};

export default Profile;
