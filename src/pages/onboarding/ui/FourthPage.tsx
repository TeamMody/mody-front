import styled from 'styled-components';
import Icon from '@shared/assets/icon/ic-fourth-page.svg?react';

const FourthPage = () => {
  return (
    <>
      <Text>
        모디가 당신에게 <br /> 맞는 모드를 찾기 위해 <br /> 정보가 필요해요!
      </Text>
      <ImageContainer>
        <Icon width={95} height={213} />
      </ImageContainer>
      {/* link */}
      <LinkSpan>분석 없이 써볼래요</LinkSpan>
    </>
  );
};

const Text = styled.span`
  color: #ffffff;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.heading_bold_22px};
`;

const ImageContainer = styled.div`
  margin-top: 95px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkSpan = styled.span`
  margin-top: 20vh;
  font-size: ${({ theme }) => theme.fonts.caption_medium_14px};
  text-decoration: underline;
  color: white;
`;
export default FourthPage;
