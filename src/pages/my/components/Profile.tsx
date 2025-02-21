import { SettingModal } from '@my/components/modal/SettingModal.tsx';
import { ProfileHeader } from '@my/components/ProfileHeader.tsx';
import { MyBodyTypeCard } from '@my/components/MyBodyTypeCard.tsx';
import { useGetBodyTypeResult } from '@my/features/hooks/mutate/useGetBodyTypeResult.ts';
import { MemberInfo } from '@shared/types';
import { motion } from 'framer-motion';
import styled from 'styled-components';
interface ProfileProps {
  modalState: boolean;
  closeModal: () => void;
  fetchedInfo: MemberInfo;
}

const Profile = ({ modalState, closeModal, fetchedInfo }: ProfileProps) => {
  const { data } = useGetBodyTypeResult(fetchedInfo?.id!);
  return (
    <ProfileDiv
      initial={{ opacity: 0, y: 20 }} // 초기 상태: 살짝 아래에 있고 투명함
      animate={{ opacity: 1, y: 0 }} // 애니메이트 상태: 제자리에서 나타남
      transition={{ duration: 0.5 }} // 순차적 딜레이 효과
    >
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
    </ProfileDiv>
  );
};

export default Profile;

const ProfileDiv = styled(motion.div)``;
