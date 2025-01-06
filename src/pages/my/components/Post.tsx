import styled from 'styled-components';
const Post = ({ img }: { img: string }) => {
  return (
    <PostWrapper>
      <img src={img} alt="게시물" />
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray900};
  height: 100%;
  :hover {
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // 이미지가 카드 안에 꽉 차도록 설정
  }
`;

export default Post;
