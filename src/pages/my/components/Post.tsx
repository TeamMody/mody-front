import IcHeart from '@shared/assets/icon/ic-full-heart.svg';
import { PostProps } from '@shared/types';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { ActiveIndex, useTabBarStore } from '@my/features/store/useTabBarStore';

const Post = ({ id, imageUrl, recommendType, result }: PostProps) => {
  const navigate = useNavigate();
  const { activeIndex } = useTabBarStore();

  const handleOnClick = () => {
    if (activeIndex === ActiveIndex.MY)
      navigate('/my/mypost', {
        state: {
          id,
          title: '내 게시글',
        },
      });
    else if (activeIndex === ActiveIndex.LIKE) {
      navigate('/my/likepost', {
        state: {
          id,
          title: '좋아요',
        },
      });
    } else if (activeIndex === ActiveIndex.RECOMMEND) {
      navigate('/recommendation-result', {
        state: {
          type: recommendType,
          result: result,
        },
      });
    }
  };

  return (
    <PostWrapper onClick={handleOnClick}>
      <Image src={imageUrl} alt="게시물" />
      {result && result.liked && activeIndex === ActiveIndex.RECOMMEND && (
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
  overflow: hidden;
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
