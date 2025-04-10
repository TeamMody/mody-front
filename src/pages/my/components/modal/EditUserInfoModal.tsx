import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IcLeftArrow } from '@shared/assets/icon/ic-left-arrow';
import { ModalProps } from '@shared/types/my/modalProps';
import Human from '@icon/ic-human.svg?react';
import Edit from '@icon/ic-edit.svg?react';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserInfoSchema, MyUserInfoSchemaType } from '@pages/my/features/schema/MyUserInfoSchema';
import { UserDataInput } from '@my/components/UserDataInput';
import { apiInstance } from '@shared/apis/instance';
import { useEffect } from 'react';
import BirthdayModal from '@pages/onboarding/components/BirthdayModal';
import HeightModal from '@pages/onboarding/components/HeightModal';
import { convertSingleImgToWebP } from '@shared/utils/convertToWebP.ts';
import { uploadImageToS3 } from '@pages/onboarding/feature/utils/uploadImage.ts';

export const EditUserInfoModal = ({ isOpened, onClose }: ModalProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<MyUserInfoSchemaType>({
    resolver: zodResolver(UserInfoSchema),
    mode: 'onChange',
    defaultValues: async () => {
      const res = await apiInstance.get('/members/me');
      const profile = res.data.result;

      const [year, month, day] = profile.birthDate.split('-').map(Number);

      return {
        image: profile.profileImageUrl,
        nickname: profile.nickname,
        birthday: {
          year,
          month,
          day,
        },
        sex: profile.gender,
        height: profile.height,
      };
    },
  });

  useEffect(() => {
    const image = watch('image');
    if (image) {
      setImage(image);
    }
  }, [watch('image')]);

  const rootRef = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState<string>();
  const [imgFile, setImgFile] = useState<File[] | null>(null);

  const [isVisible, setIsVisible] = useState(isOpened);

  const ModalClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 100);
  };

  const onSubmit = async () => {
    const { birthday, height, sex: gender, image: prev, nickname } = getValues();
    const birthDate = `${birthday.year}-${String(birthday.month).padStart(2, '0')}-${String(
      birthday.day,
    ).padStart(2, '0')}`;
    try {
      let profileImageUrl = image;
      if (prev !== profileImageUrl && profileImageUrl !== null && imgFile) {
        const convertedImage = await convertSingleImgToWebP({ img: imgFile[0] });
        profileImageUrl = await uploadImageToS3(convertedImage!, imgFile);
      }
      console.log(profileImageUrl);
      const res = await apiInstance.patch('/members/edit', {
        nickname,
        birthDate,
        gender,
        height,
        profileImageUrl,
      });

      if (res.status === 200) {
        ModalClose();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onError = () => {
    console.log(errors);
  };

  const handelFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const uploadFile = files?.[0];
      const previewUrl = window.URL.createObjectURL(uploadFile);

      setImgFile(Array.from(files));
      setImage(previewUrl);
    }
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isVisible && watch('birthday') && (
        <Container
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          ref={rootRef}
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
                  onChange={handelFileUpload}
                />
                {image !== undefined ? (
                  <>
                    <ProfilImg src={image} alt="이미지가 없습니다." />
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
                <UserDataInput
                  inputTitle="이름"
                  type="text"
                  inputValue={watch('nickname')}
                  inputKind="nickname"
                  errors={errors}
                  register={register}
                  maxLength={12}
                />

                <BirthdayModal watch={watch} rootRef={rootRef} setValue={setValue} />
                <div className="gender-title">성별</div>
                <Gender>
                  <button
                    onClick={() => setValue('sex', 'MALE')}
                    className={watch('sex') === 'MALE' ? 'selected' : ''}
                    {...register('sex', { required: true })}
                    type="button"
                  >
                    남자
                  </button>
                  <button
                    onClick={() => setValue('sex', 'FEMALE')}
                    className={watch('sex') === 'FEMALE' ? 'selected' : ''}
                    {...register('sex', { required: true })}
                    type="button"
                  >
                    여자
                  </button>
                </Gender>

                <HeightModal watch={watch} rootRef={rootRef} setValue={setValue} />
              </Bottom>
              <CompleteButton type="submit">완료</CompleteButton>
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
  z-index: 10010;
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
    color: black;
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
`;
const CompleteButton = styled.button`
  margin-top: 2.962vh;
  width: 100%;
  height: 6.635vh;
  background-color: ${({ theme }) => theme.colors.green500};
  color: black;
  flex-shrink: 0;
`;
const ProfilImg = styled.img`
  width: 43.846vw;
  height: 43.846vw;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
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
  & div {
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
  & .gender-title {
    margin-top: 10px;
  }
`;

const Gender = styled.div`
  width: 100%;
  display: flex;
  height: 7.583vh;
  font-size: ${({ theme }) => theme.fonts.heading_medium_20px};
  justify-content: space-between;
  margin-top: 0.948vh;
  & button {
    border-radius: 10px;
    width: 44.103vw;
    height: 7vh;
    font-size: ${({ theme }) => theme.fonts.heading_medium_20px};
    color: white;
    background-color: ${({ theme }) => theme.colors.gray600};

    &.selected {
      background-color: ${({ theme }) => theme.colors.green500};
      color: black;
    }
  }
`;
