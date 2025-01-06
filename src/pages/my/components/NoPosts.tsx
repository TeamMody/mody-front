import styled from 'styled-components';

const NoPosts = ({ activeTab }: { activeTab: string }) => {
  return (
    <Wrapper>
      <NoPostsWrapper>
        {activeTab === 'recommend'
          ? '결과물이 없어요'
          : activeTab === 'post'
            ? '게시물이 없어요'
            : activeTab === 'like'
              ? '좋아요한 게시글이 없어요'
              : null}
      </NoPostsWrapper>
      {activeTab === 'recommend' ? (
        <GetRecommendWrapper>추천 받으러 가기</GetRecommendWrapper>
      ) : null}
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
