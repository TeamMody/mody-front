import styled from 'styled-components';
import IcLoading from '@icon/ic-loading.svg';

export const Loading = () => {
  const image = IcLoading;

  return (
    <>
      <Container>
        <LoadingImage src={image} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
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
`;
