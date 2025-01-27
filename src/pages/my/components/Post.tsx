import IcHeart from '@shared/assets/icon/ic-full-heart.svg';
import styled from 'styled-components';
interface PostData {
  postId: number;
  files: string[];
}
interface PostProps {
  data: PostData;
  activeTab: string;
}

const Post = ({ data, activeTab }: PostProps) => {
  //임시로 좋아요 상태를 true로 설정
  const like = true;
  return (
    <PostWrapper>
      <Image src={data.files[0]} alt="게시물" />
      {like && activeTab === 'recommend' && <HeartIcon src={IcHeart} alt="좋아요 아이콘" />}
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  position: relative; // 하트 아이콘을 이미지 위에 겹치기 위해 추가
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray900};
  height: 100%;
  :hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeartIcon = styled.img`
  position: absolute;
  top: 5%;
  left: 35%;
  width: 24px;
  height: 24px;
`;

export default Post;
