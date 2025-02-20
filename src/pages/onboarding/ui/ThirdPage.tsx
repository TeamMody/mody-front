import styled from 'styled-components';
import Icon from '@shared/assets/icon/ic-third-page.svg?react';

const ThirdPage = () => {
  return (
    <>
      <Text>
        이제 모디와 함께 <br /> 당신의 모드를 시작해봐요!
      </Text>

      <ImageContainer>
        <Icon width={245} height={184} />
      </ImageContainer>
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
  margin-top: 145px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ThirdPage;
