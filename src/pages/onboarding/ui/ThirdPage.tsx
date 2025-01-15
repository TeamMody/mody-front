import styled from 'styled-components';
import Human from '@onboarding/icons/ic-human.svg?react';
import { ThirdPageProps } from '@onboarding/types';

const ThirdPage = ({ getValues }: ThirdPageProps) => {
  const previewImage = getValues('previewImage');
  return (
    <>
      <Text>
        이제 모디와 함께 <br /> 당신의 모드를 시작해봐요!
      </Text>

      <ImageContainer>
        {!previewImage ? <Human /> : <Image src={previewImage} alt="" />}
      </ImageContainer>
      {/* <Image src={previewImage} alt="" /> */}
    </>
  );
};

const Text = styled.span`
  margin-top: 5vh;
  color: #ffffff;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.heading_bold_22px};
`;

const ImageContainer = styled.div`
  width: 20vh;
  height: 20vh;
  border-radius: 100%;
  background-color: #808080;
  margin-top: 5vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export default ThirdPage;
