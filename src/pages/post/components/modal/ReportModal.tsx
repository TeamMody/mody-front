import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { apiInstance } from '@shared/apis/instance';
import { AxiosError } from 'axios';

export const ReportModal = ({
  isOpened,
  setIsMoreClicked,
  id,
}: {
  isOpened: boolean;
  setIsMoreClicked: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}) => {
  if (!isOpened) return null;

  const ModalRef = useRef<HTMLDialogElement>(null);

  //postId를 받아와서 삭제하기 버튼 클릭 시 모달창 띄우기

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

  const handleClose = async (answer: boolean) => {
    if (answer) {
      try {
        const res = await apiInstance.post(`/posts/${id}/reports`);
        if (res.status === 200) {
          alert('해당 게시글을 신고하였습니다.');
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response?.status === 400) {
            alert('게시물 신고하기에 실패했습니다.');
          } else {
            alert(`오류 발생: ${err.response?.status}`);
          }
        } else {
          alert('알 수 없는 오류가 발생했습니다.');
        }
      }
    }
    setIsMoreClicked(false);
  };

  return ReactDOM.createPortal(
    <Wrapper ref={ModalRef} onClick={() => setIsMoreClicked(false)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <div>이 게시글을 신고하시겠습니까?</div>
        <div>
          <button onClick={() => handleClose(false)}>아니요</button>
          <button onClick={() => handleClose(true)}>예</button>
        </div>
      </Container>
    </Wrapper>,
    document.body,
  );
};

const Wrapper = styled.dialog`
  all: unset;
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
`;
const Container = styled.div`
  height: 28.791vh;
  width: 87.179vw;
  background-color: ${({ theme }) => theme.colors.gray800};
  border-radius: 20px;
  position: relative;
  top: calc(50% - 14vh);
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 0vh 2.564vw 1.161vh 2.564vw;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 9.123vh;
    font-size: ${({ theme }) => theme.fonts.heading_bold_18px};
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    margin-top: 9.123vh;
    width: 100%;
  }

  & > div:nth-child(2) > button:nth-child(1) {
    width: 38.462vw;
    height: 5.213vh;
    font-size: ${({ theme }) => theme.fonts.body_medium_16px};
    background-color: ${({ theme }) => theme.colors.green500};
    color: black;
  }

  & > div:nth-child(2) > button:nth-child(2) {
    width: 38.462vw;
    height: 5.213vh;
    font-size: ${({ theme }) => theme.fonts.body_medium_16px};
    background-color: ${({ theme }) => theme.colors.gray300};
    color: black;
  }
`;

export default ReportModal;
