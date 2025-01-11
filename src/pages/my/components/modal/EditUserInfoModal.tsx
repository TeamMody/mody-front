import { ModalProps } from '@shared/types/my/modalProps';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { IcLeftArrow } from '@shared/assets/icon/ic-left-arrow';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Human from '@onboarding/icons/ic-human.svg?react';
import Edit from '@onboarding/icons/ic-edit.svg?react';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserInfoSchema } from '@my/features/schema/userInfoSchema';
import { log } from 'console';
interface EditUserInfoModalProps extends ModalProps {
  profileImg?: string | undefined;
  name: string;
  birth: string;
  gender: string;
  height: string;
}

interface UserInfoProps {
  profileImg?: string | undefined;
  name: string;
  birth: string;
  gender: '남자' | '여자';
  height: string;
}
export const EditUserInfoModal = ({
  isOpened,
  onClose,
  profileImg,
  name,
  birth,
  gender,
  height,
}: EditUserInfoModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfoProps>({
    resolver: zodResolver(UserInfoSchema),
    mode: 'onChange',
  });
  const [isVisible, setIsVisible] = useState(isOpened);
  const [img, setImg] = useState<string | undefined>(profileImg);
  const ModalClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 400);
  };
  const onSubmit = (data: any) => {
    console.log(data);
    ModalClose();
  };
  const onError = () => {
    console.log(errors);
  };
  const handelFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const uploadFile = files?.[0];
    if (uploadFile) {
      const previewUrl = window.URL.createObjectURL(uploadFile);
      setImg(previewUrl);
      console.log(previewUrl);
    }
  };
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isVisible && (
        <Container
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Top>
              <button onClick={ModalClose}>
                <IcLeftArrow />
              </button>
              <div>회원정보 수정</div>
            </Top>

            <Middle>
              <div>
                <ImageInput
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  {...register('profileImg')}
                />
                {profileImg !== undefined ? (
                  <>
                    <ProfilImg src={img} alt="이미지가 없습니다." />
                    <EditLabel htmlFor="image-upload">
                      <Edit />
                    </EditLabel>
                  </>
                ) : (
                  <>
                    <Label htmlFor="image-upload">
                      <Human />
                    </Label>
                    <EditLabel htmlFor="image-upload">
                      <Edit />
                    </EditLabel>
                  </>
                )}
              </div>

              <Bottom>
                <span className="name">이름</span>
                <input
                  type="text"
                  defaultValue={name}
                  placeholder={name}
                  {...register('name')}
                ></input>
                {errors.name?.message ? <p>{errors.name?.message}</p> : <p></p>}

                <span className="birth">생년월일</span>
                <input
                  type="date"
                  defaultValue={birth}
                  placeholder={birth}
                  {...register('birth')}
                ></input>
                {errors.birth?.message ? <p>{errors.birth?.message}</p> : <p></p>}
                <span className="gender">성별</span>
                <input defaultValue={gender} placeholder={gender} {...register('gender')}></input>
                {errors.gender?.message ? <p>{errors.gender?.message}</p> : <p></p>}
                <span className="height">키</span>
                <input
                  type="text"
                  defaultValue={height}
                  placeholder={height}
                  {...register('height')}
                ></input>
                {errors.height?.message ? <p>{errors.height?.message}</p> : <p></p>}
              </Bottom>
              <button type="submit">완료</button>
            </Middle>
          </form>
        </Container>
      )}
    </AnimatePresence>,
    document.body,
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  max-width: 440px;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  background: linear-gradient(to bottom, #121212, #262626);
`;

const Top = styled.div`
  max-width: 440px;
  width: 100vw;
  height: 7.583vh;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  background: linear-gradient(to bottom, #121212, #262626);

  & > button:nth-child(1) {
    margin-right: 90.359vw;
  }

  & > div:nth-child(2) {
    display: flex;
    position: fixed;
    font-size: ${({ theme }) => theme.fonts.heading_bold_22px};
  }
`;

const Middle = styled.div`
  height: 92.417vh;
  padding: 1.896vh 4.872vw 4.028vh 4.872vw;
  display: flex;
  flex-direction: column;
  & div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  & button {
    margin-top: 2.962vh;
    width: 100%;
    height: 6.635vh;
    background-color: ${({ theme }) => theme.colors.green500};
  }
`;
const ProfilImg = styled.img`
  width: 43.846vw;
  height: 43.846vw;
  border: 1px solid blue;
  border-radius: 50%;
`;
const ImageInput = styled.input`
  display: none;
`;
const Label = styled.label`
  width: 43.846vw;
  height: 43.846vw;
  border-radius: 100%;
  background-color: #808080;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const EditLabel = styled.label`
  width: 5.213vh;
  height: 5.213vh;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.gray700};
  position: absolute;
  left: 60.641vw;
`;

const Bottom = styled.div`
  margin-top: 0.948vh;
  display: flex;
  flex-direction: column;
  & span {
    font-size: ${({ theme }) => theme.fonts.body_bold_16px};
  }

  & input {
    margin-top: 0.948vh;
    border-radius: 10px;
    height: 5.687vh;
    border: 0;
    background-color: ${({ theme }) => theme.colors.gray600};
    font-size: ${({ theme }) => theme.fonts.heading_medium_20px};
    text-align: center;
    align-items: center;
    align-contents: center;
    color: white;
    padding: 9px;
  }
  & p {
    height: 2.844vh;
    color: red;
    display: flex;
    align-items: center;
  }
`;
