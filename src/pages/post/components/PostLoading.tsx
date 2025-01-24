import styled from 'styled-components';
import IcLoading from '@icon/ic-loading.svg';
import IcBgLoading from '@icon/ic-bg-loading.svg';

export const PostLoading = () => {
  const image = IcLoading;
  return (
    <>
      <Container>
        <LoadingImage src={image} />
        <Text>회원님의 게시글을 업로드 중이에요</Text>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 440px;
  display: flex;
  flex-direction: column;6
  justify-content: center;
  align-items: center;
  background:
    linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${IcBgLoading}) no-repeat center;
  background-size: cover;
  gap: 25px;
`;

const Text = styled.p`
  font: ${({ theme }) => theme.fonts.heading_bold_24px};
  text-align: center;
  white-space: pre-wrap;
`;

const LoadingImage = styled.img`
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;
