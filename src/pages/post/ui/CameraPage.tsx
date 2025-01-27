import { useRef } from 'react';
import Webcam from 'react-webcam';
import IcCamera from '@shared/assets/icon/ic-camera.svg?react';
import { useNavigate } from 'react-router';
import { IcLeftArrow } from '@shared/assets/icon/ic-left-arrow';
import styled from 'styled-components';
export const CameraPage = () => {
  const webcamRef = useRef<Webcam>(null);
  const navigate = useNavigate();
  const capture = () => {
    if (webcamRef.current) {
      const image = webcamRef.current.getScreenshot();
      navigate('/post/capturedImgPage', { state: { capturedImg: image } });
    }
  };

  return (
    <Container>
      <LeftArrowButton onClick={() => navigate(-1)}>
        <IcLeftArrow />
      </LeftArrowButton>
      <WebcamStyle ref={webcamRef} screenshotFormat="image/jpeg" />
      <ButtonStyle onClick={capture}>
        <IcCamera />
      </ButtonStyle>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const LeftArrowButton = styled.button`
  margin-top: 1vh;
  width: 100%;
  display: flex;
  margin-left: 5vw;
`;
const WebcamStyle = styled(Webcam)`
  width: 100%;
  height: 70%;
`;
const ButtonStyle = styled.button`
  aspect-ratio: 1 / 1;
  width: 20%;
  border: 1px solid white;
  border-radius: 50%;
  z-index: 100;
  margin-bottom: 9.479vh;
`;

// const IcCameraStyle = styled(IcCamera)`
//   path {
//     stroke: ${({ theme }) => theme.colors.green500} !important;
//   }
// `;
