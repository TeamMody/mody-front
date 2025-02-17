import styled from 'styled-components';
import { RecommendationModal } from './modal/RecommendationModal';
import { useState } from 'react';
import { useMyInfoStore } from '@shared/store/useMyInfoStore';
import { ActiveIndex } from '../features/store/useTabBarStore';

const NoPosts = ({ activeIndex }: { activeIndex: number }) => {
  const [modalState, setModalState] = useState<boolean>(false);
  const { myInfo } = useMyInfoStore();

  return (
    <Wrapper>
      <NoPostsWrapper>
        {activeIndex === ActiveIndex.RECOMMEND
          ? '결과물이 없어요'
          : activeIndex === ActiveIndex.MY
            ? '게시물이 없어요'
            : activeIndex === ActiveIndex.LIKE
              ? '좋아요한 게시글이 없어요'
              : null}
      </NoPostsWrapper>
      {activeIndex === ActiveIndex.RECOMMEND ? (
        <GetRecommendWrapper onClick={() => setModalState(true)}>
          추천 받으러 가기
        </GetRecommendWrapper>
      ) : null}
      <RecommendationModal
        isOpened={modalState}
        content="스타일을 추천 받으러 가볼까요?"
        btnText="스타일 추천 받기"
        onClose={() => setModalState(false)}
        img={myInfo?.profileImageUrl}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const NoPostsWrapper = styled.div`
  font: ${({ theme }) => theme.fonts.heading_bold_24px};
`;

const GetRecommendWrapper = styled.button`
  font: ${({ theme }) => theme.fonts.body_medium_16px};
  color: #ffffff;
  border: none;
  margin-top: 16px;
  display: flex;
  :hover {
    cursor: pointer;
  }
`;

export default NoPosts;
