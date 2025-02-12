import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import { saveAs } from 'file-saver';

export const CapturedImgPage = () => {
  const location = useLocation();
  const { capturedImg } = location.state;
  const navigate = useNavigate();
  const saveImg = () => {
    fetch(capturedImg)
      .then((res) => res.blob())
      .then((blob) => saveAs(blob, '정휘준'));
    navigate('/post/createPost');
  };

  return (
    <Container>
      <CapturedImg src={capturedImg} />
      <div>
        <ButtonStyle onClick={saveImg}>저장하기</ButtonStyle>
        <ButtonStyle onClick={() => navigate(-1)}>다시 찍기</ButtonStyle>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    gap: 10px;
    margin: 16vh 0 0 0;
  }
`;
const CapturedImg = styled.img`
  width: 100%;
  height: 100vw;
`;
const ButtonStyle = styled.button`
  color: white;
  width: 50%;
  height: 8vh;
  background-color: ${({ theme }) => theme.colors.green500};
  color: black;
  font-size: ${({ theme }) => theme.fonts.body_bold_16px};
  &:hover {
    background-color: gray;
    color: ${({ theme }) => theme.colors.green500};
  }
`;
