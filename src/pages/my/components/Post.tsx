import IcHeart from '@shared/assets/icon/ic-full-heart.svg';
import styled from 'styled-components';

interface PostProps {
  img: string;
  activeTab: string;
}

const Post = ({ img, activeTab }: PostProps) => {
  //임시로 좋아요 상태를 true로 설정
  const like = true;
  return (
    <PostWrapper>
      <Image src={img} alt="게시물" />
      {like === true && activeTab === 'recommend' && (
        <HeartIcon src={IcHeart} alt="좋아요 아이콘" />
      )}
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
  top: 10px;
  right: 10px;
  z-index: 1;
`;

export default Post;
