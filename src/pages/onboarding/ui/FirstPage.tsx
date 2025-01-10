import styled from 'styled-components';
import Human from '@onboarding/icons/ic-human.svg?react';
import Edit from '@onboarding/icons/ic-edit.svg?react';
const FirstPage = () => {
  return (
    <>
      <LabelContainer>
        <ImageInput type="file" id="image-upload" accept="image/*" />
        <Label htmlFor="image-upload">
          <Human />
        </Label>
        <EditLabel htmlFor="image-upload">
          <Edit />
        </EditLabel>
      </LabelContainer>

      <Text>모디가 당신을 어떻게 부를까요?</Text>
      <Input
        type="text"
        placeholder="닉네임 (최대 12자)"
        minLength={2}
        maxLength={12}
        onFocus={(e) => (e.target.placeholder = '')}
        onBlur={(e) => (e.target.placeholder = '닉네임 (최대 12자)')}
      ></Input>
    </>
  );
};

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
