import styled from 'styled-components';
import { ThirdPageProps } from '@onboarding/types';
import Human from '@onboarding/icons/ic-human.svg?react';

const FourthPage = ({ getValues }: ThirdPageProps) => {
  const previewImage = getValues('previewImage');

  return (
    <>
      <Text>
        모디가 당신에게 <br /> 맞는 모드를 찾기 위해 <br /> 정보가 필요해요!
      </Text>
      <ImageContainer>
        {!previewImage ? <Human /> : <Image src={previewImage} alt="" />}
      </ImageContainer>
      {/* link */}
      <LinkSpan>분석 없이 써볼래요</LinkSpan>
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
const LinkSpan = styled.span`
  margin-top: 18vh;
  font-size: ${({ theme }) => theme.fonts.caption_medium_14px};
  text-decoration: underline;
  color: white;
`;
export default FourthPage;
