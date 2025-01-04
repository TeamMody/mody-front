import { IcRightArrow } from '@shared/assets/icon/ic-right-arrow';
import { ConfirmationModal } from '@pages/my/components/modal/ConfirmationModal';
import { RecommendationModal } from '@pages/my/components/modal/RecommendationModal';
import styled from 'styled-components';
import { useState } from 'react';
export const MyBodyTypeCard = () => {
  const [modalState, setModalState] = useState<boolean>(false);
  return (
    <>
      <Container>
        <MyBodyType>
          <span>나의 체형 타입은?</span>
          <span>나의 체형 진단 받으러 가기</span>
        </MyBodyType>
        <button onClick={() => setModalState(true)}>
          <IcRightArrow />
        </button>
      </Container>
      {/* 종류 1번 modal */}
      {/* <ConfirmationModal
        isOpened={modalState}
        content="스타일을 추천 받으러 가볼까요?"
        btnText="스타일 추천 받기"
        img=""
        onClose={() => setModalState(false)}
      /> */}

      {/* 종류 1번 modal */}
      <RecommendationModal
        isOpened={modalState}
        content="이 게시글을 삭제할까요?"
        onClose={() => setModalState(false)}
      />
    </>
  );
};

const Container = styled.div`
  width: calc(100% - 41px);
  margin: 16px 20px 0px 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10.5px 17px 10.5px 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const MyBodyType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > span:nth-child(1) {
    font-size: ${({ theme }) => theme.fonts.body_bold_16px};
  }
  & > span:nth-child(2) {
    font-size: ${({ theme }) => theme.fonts.detail_medium_12px};
  }
`;
