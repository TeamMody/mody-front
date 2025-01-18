import styled from 'styled-components';
import Human from '@onboarding/icons/ic-human.svg?react';
import Edit from '@onboarding/icons/ic-edit.svg?react';
import { FirstPageProps } from '@onboarding/types';
import { useEffect, useState } from 'react';

const FirstPage = ({ register, watch, setValue }: FirstPageProps) => {
  const imgFile = watch('image');

  const [imagePreview, setImagePreview] = useState<string | undefined>(undefined);
  // image의 값이 undefined가 아니면 image 태그 src에 박아넣어줘야 함 .
  // schema 하나 더 만들고 setValue 갈겨주자 그냥
  useEffect(() => {
    if (imgFile && imgFile[0]) {
      const file = imgFile[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setValue('previewImage', reader.result as string);
      };
    }
  }, [imgFile]);
  return (
    <>
      <LabelContainer>
        <ImageInput type="file" id="image-upload" accept="image/*" {...register('image')} />
        <Label htmlFor="image-upload">
          {imagePreview ? <Image src={imagePreview} /> : <Human width={'100%'} height={'90%'} />}
        </Label>
        <EditLabel htmlFor="image-upload">
          <Edit />
        </EditLabel>
      </LabelContainer>

      <Text>모디가 당신을 어떻게 부를까요?</Text>
      <Input
        type="text"
        placeholder="닉네임 (최대 12자)"
        minLength={1}
        maxLength={12}
        onFocus={(e) => (e.target.placeholder = '')}
        // onBlur={(e) => (e.target.placeholder = '닉네임 (최대 12자)')}
        {...register('nickname', { required: true })}
      ></Input>
    </>
  );
};
const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  margin-top: 5vh;
  width: 100%;
  height: 5vh;
  border: none;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.heading_medium_20px};
  border-radius: 10px;
  color: #dbdbdb;
  &::placeholder {
    color: #dbdbdb;
    line-height: 5vh;
  }
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const Text = styled.span`
  margin-top: 5vh;
  color: #ffffff;
  font-size: ${({ theme }) => theme.fonts.heading_bold_22px};
`;

const LabelContainer = styled.div`
  position: relative;
`;
const ImageInput = styled.input`
  display: none;
`;

const Label = styled.label`
  width: 22vh;
  height: 22vh;
  border-radius: 100%;
  background-color: #808080;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const EditLabel = styled.label`
  width: 6vh;
  height: 6vh;
  position: absolute;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.gray700};
  bottom: 0;
  right: 0;
`;

export default FirstPage;
