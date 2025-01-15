import styled from 'styled-components';
import ProgressBar from '@shared/ui/ProgressBar';
import { useState, useRef } from 'react';
import Heart from '@shared/assets/icon/ic-heart.svg?react';
import MoreVertical from '@shared/assets/icon/ic-more-vertical.svg?react';
import FullHeart from '@shared/assets/icon/ic-full-heart.svg?react';

interface PostPropsType {
  images: string[];
  name: string;
  type: string;
  description: string;
  likeCount: number;
  isLiked: boolean;
}

// 이미지 미리 렌더링 시켜놓고 해얃될듯

const Post = ({ data }: { data: PostPropsType }) => {
  const [imgIdx, setImgIdx] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const startXRef = useRef<number | null>(null); // 터치 시작 지점

  // 터치 시작 이벤트
  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
  };

  // 터치 종료 이벤트
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startXRef.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const diffX = startXRef.current - endX;

    // 왼쪽 스와이프 (다음 이미지)
    if (diffX > 50) {
      setImgIdx((prev) => (prev < data.images.length - 1 ? prev + 1 : prev));
    }
    // 오른쪽 스와이프 (이전 이미지)
    else if (diffX < -50) {
      setImgIdx((prev) => (prev > 0 ? prev - 1 : prev));
    }

    startXRef.current = null; // 초기화
  };

  return (
    <Container>
      <PostContainer
        bgImage={data.images[imgIdx]}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        isExpanded={isExpanded}
      >
        <ProgressBar length={data.images.length} curIdx={imgIdx}></ProgressBar>
        {/* InfoContainer는 분리가 필요해보임 imgIdx가 리렌더링될 때마다  */}
        <InfoContainer isExpanded={isExpanded} onClick={() => setIsExpanded((prev) => !prev)}>
          <UserInfo>
            <span className="user-name">{data.name}</span>
            <span className="user-type">{data.type}</span>
            {isExpanded && <IconBox data={data} isExpanded={isExpanded} />}
          </UserInfo>
          <DescriptionContainer>
            <p className={`description ${isExpanded ? 'expanded' : ''}`}>{data.description}</p>
            {!isExpanded && <IconBox data={data} isExpanded={isExpanded} />}
          </DescriptionContainer>
        </InfoContainer>
      </PostContainer>
    </Container>
  );
};

const IconBox = ({ data, isExpanded }: { data: PostPropsType; isExpanded: boolean }) => {
  return (
    <IconContainer isExpanded={isExpanded}>
      <div className="heart">
        {/* onClick event 설정 */}
        {data.isLiked ? (
          <FullHeart width={24} height={24} onClick={() => console.log('clicked')} />
        ) : (
          <Heart width={24} height={24} />
        )}
        <span>{data.likeCount}</span>
      </div>
      <div className="more-vertical">
        {/* onClick event 설정 */}
        <MoreVertical />
      </div>
    </IconContainer>
  );
};
const Container = styled.main`
  width: 100%;
  padding: 16px 20px;
  height: calc(100vh - 8vh - 64px);

  // background-color: black;
`;
const PostContainer = styled.div<{ isExpanded: boolean; bgImage: string }>`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: ${({ isExpanded, bgImage }) =>
    isExpanded
      ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bgImage})`
      : `url(${bgImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
`;

const InfoContainer = styled.div<{ isExpanded: boolean }>`
  padding: 0px 15px 24px 15px;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: ${({ isExpanded }) => (isExpanded ? '40%' : '20%')};
  transition: height 0.5s ease;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;

  & > .user-name {
    font-size: ${({ theme }) => theme.fonts.heading_bold_24px};
  }
  & > .user-type {
    font-size: ${({ theme }) => theme.fonts.heading_medium_18px};
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .description {
    position: relative;
    width: 70%;
    height: 60%;
    line-height: 90%;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;

    &.expanded {
      height: auto; /* 확장 시 높이 자동 */
      -webkit-line-clamp: unset; /* 줄 수 제한 해제 */
      width: 100%;
    }

    .more-btn {
      position: absolute;
      white-space: nowrap;
      text-align: center;
      margin-bottom: auto;
      bottom: -3px;
      right: 0;
      font-size: ${({ theme }) => theme.fonts.detail_medium_12px};
    }
  }
`;

const IconContainer = styled.div<{ isExpanded: boolean }>`
  width: 20%;
  height: 100%;
  display: flex;

  position: ${({ isExpanded }) => isExpanded && 'absolute'};
  right: ${({ isExpanded }) => isExpanded && '0'};
  bottom: ${({ isExpanded }) => isExpanded && '-5px'};

  div {
    width: 50%;
    height: 200%;
  }
  .heart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;

    span {
      font-size: ${({ theme }) => theme.fonts.detail_medium_12px};
    }
  }

  .more-vertical {
    text-align: center;
  }
`;

export default Post;
