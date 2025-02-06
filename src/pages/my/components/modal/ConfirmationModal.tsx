import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { deletePostMutation } from '@pages/my/hooks/mutate/useDeletePost';
import { usePostIdStore } from '@pages/my/features/store/usePostId';
import { useLogOut } from '@pages/my/hooks/query/useLogOut';
interface ModalProps {
  isOpened: boolean;
  onClose: () => void;
  content: '이 게시글을 삭제할까요?' | '로그아웃을 진행할까요?' | '회원탈퇴를 진행할까요?';
  index: number;
}

export const ConfirmationModal = ({ isOpened, content, onClose, index }: ModalProps) => {
  if (!isOpened) return null;
  const ModalRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();

  //postId를 받아와서 삭제하기 버튼 클릭 시 모달창 띄우기
  const { postId } = usePostIdStore();
  const { mutate: deletePost } = deletePostMutation();

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

  const handleClose = (index: number = 0) => {
    if (onClose) {
      if (index === 1) {
        useLogOut();
        onClose();
        // navigate('/onboarding');
      } else if (index === 2) {
        onClose();
        navigate('/my'); // 삭제하기 모달에서 예를 눌렀을 때 라우팅 설정
        if (postId) {
          deletePost(postId);
        }
      } else {
        onClose();
      }
    }
  };

  return ReactDOM.createPortal(
    <Wrapper ref={ModalRef}>
      <Container>
        <div>{content}</div>
        <div>
          <button onClick={() => handleClose()}>아니요</button>
          <button onClick={() => handleClose(index)}>예</button>
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
