import styled from 'styled-components';
const FourthPage = ({ getValues }) => {
  const previewImage = getValues('previewImage');

  return (
    <>
      <Text>
        모디가 당신에게 <br /> 맞는 모드를 찾기 위해 <br /> 정보가 필요해요!
      </Text>
      <Image src={previewImage} alt="" />
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

const Image = styled.img`
  width: 20vh;
  height: 20vh;
  border-radius: 100%;
  background-color: #3b3b3b;
  margin-top: 5vh;
`;

const LinkSpan = styled.span`
  margin-top: 18vh;
  font-size: ${({ theme }) => theme.fonts.caption_medium_14px};
  text-decoration: underline;
  color: white;
`;
export default FourthPage;
