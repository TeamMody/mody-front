import React, { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { IcCancel } from '../../../../shared/assets/icon/ic-cancel';
interface Modal {
  isOpened: boolean;
  onClose: () => void;
  // text: string | undefined;
  children: React.ReactNode;
}
export const Modal = ({ isOpened, children, onClose }: Modal) => {
  if (!isOpened) return null;
  const ModalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ModalRef.current;
    if (dialog) {
      if (isOpened) {
        if (!dialog.open) {
          dialog.showModal(); // 모달 열기
        }
      } else {
        if (dialog.open) {
          dialog.close(); // 모달 닫기
        }
      }
    }
  }, [isOpened]);
  const handleClose = () => {
    if (onClose) onClose();
  };
  return (
    <Container ref={ModalRef}>
      <ModalBody>
        <CancelIcon onClick={handleClose} />
        <div>{children}</div>
      </ModalBody>
    </Container>
  );
};

const Container = styled.dialog`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ModalBody = styled.div`
  width: 390px;
  height: 400px;
`;
const CancelIcon = styled(IcCancel)`
  border: 1px solid red;
`;
