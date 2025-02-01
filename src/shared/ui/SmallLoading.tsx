import styled from 'styled-components';
import IcLoading from '@icon/ic-loading.svg';

export const SmallLoading = () => {
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
  width: 10vw;
  height: 10vh;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoadingImage = styled.img`
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
