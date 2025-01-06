import React from 'react';
import { useRef, useEffect } from 'react';
import { IcCancel } from '@shared/assets/icon/ic-cancel';
import styled from 'styled-components';
interface ModalProps {
  isOpened: boolean;
  onClose: () => void;
  img: string | undefined;
  content: '내 체형을 분석하러 가볼까요?' | '스타일을 추천 받으러 가볼까요?';
  btnText: '체형 분석하기' | '스타일 추천 받기';
}

export const RecommendationModal = ({ isOpened, img, content, btnText, onClose }: ModalProps) => {
  if (!isOpened) return null;
  const ModalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ModalRef.current;
    if (dialog) {
      if (isOpened) {
        if (!dialog.open) {
          dialog.showModal();
        }
      } else {
        if (dialog.open) {
          dialog.close();
        }
      }
    }
  }, [isOpened]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Wrapper ref={ModalRef}>
      <Container>
        <CancelButton onClick={handleClose}>
          <IcCancel />
        </CancelButton>
        <div>
          <img src={img} alt="이미지 없음" />
          <div>{content}</div>
          <button>{btnText}</button>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.dialog`
  all: unset;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
`;
const Container = styled.div`
  height: 47.39vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.gray800};
  border-radius: 30px 30px 0px 0px;
  position: fixed;
  bottom: 0%;
  display: flex;
  flex-direction: column;
  padding: 3.081vh 5.13vw 4.028vh 5.13vw;

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3vh;
  }

  & > div:nth-child(2) > img:nth-child(1) {
    aspect-ratio: 1 / 1;
    width: 35.641vw;
    border: 2px solid black;
    border-radius: 50%;
  }
  & > div:nth-child(2) > div:nth-child(2) {
    font-size: ${({ theme }) => theme.fonts.heading_bold_24px};
    margin-top: 3vh;
  }
  & > div:nth-child(2) > button:nth-child(3) {
    width: 100%;
    height: 56px;
    font-size: ${({ theme }) => theme.fonts.button_medium_16px};
    background-color: ${({ theme }) => theme.colors.green500};
    margin-top: 3vh;
  }
`;

const CancelButton = styled.button`
  display: flex;
  justify-content: flex-end;
`;
