import styled from 'styled-components';
import { useState, memo } from 'react';
import Heart from '@shared/assets/icon/ic-heart.svg?react';
import MoreVertical from '@shared/assets/icon/ic-more-vertical.svg?react';
import FullHeart from '@shared/assets/icon/ic-full-heart.svg?react';
import ImageCarousel from '@shared/ui/ImageCarousel';

interface PostPropsType {
  images: string[];
  name: string;
  type: string;
  description: string;
  likeCount: number;
  isLiked: boolean;
}

const Post = memo(
  ({ data }: { data: PostPropsType }) => {
    const [imgIdx, setImgIdx] = useState<number>(0);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const images = data.images;

    return (
      <Container>
        <ImageCarousel
          images={images}
          isExpanded={isExpanded}
          imgIdx={imgIdx}
          setImgIdx={setImgIdx}
        />
        <Info isExpanded={isExpanded} data={data} setIsExpanded={setIsExpanded} />
      </Container>
    );
  },
  (prevProps, nextProps) => {
    // props 비교 함수: 데이터가 동일하면 리렌더링 방지
    return prevProps.data === nextProps.data;
  },
);

const Container = styled.main`
  width: 100%;
  padding: 16px 20px;
  height: 100%;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const Info = memo(
  ({
    isExpanded,
    data,
    setIsExpanded,
  }: {
    isExpanded: boolean;
    data: PostPropsType;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    return (
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
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.isExpanded === nextProps.isExpanded &&
      prevProps.data === nextProps.data &&
      prevProps.setIsExpanded === nextProps.setIsExpanded
    );
  },
);

const InfoContainer = styled.div<{ isExpanded: boolean }>`
  width: 100%;
  padding: 0px 15px 24px 30px;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: ${({ isExpanded }) => (isExpanded ? '40%' : '20%')};
  transition: height 0.5s ease;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  width: 100%;
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
    height: 4vh;
    width: 70%;
    line-height: 110%;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;

    &.expanded {
      margin-top: 1vh;
      height: auto; /* 확장 시 높이 자동 */
      -webkit-line-clamp: unset; /* 줄 수 제한 해제 */
      width: 90%;
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

const IconBox = ({ data, isExpanded }: { data: PostPropsType; isExpanded: boolean }) => {
  const handleClickHeart = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    console.log('Heart clicked', e);
  };

  const handleClickMore = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    console.log('More clicked', e);
  };

  return (
    <IconContainer isExpanded={isExpanded}>
      <div className="heart">
        {/* onClick event 설정 */}
        {data.isLiked ? (
          <FullHeart width={24} height={24} id="heart-liked" onClick={handleClickHeart} />
        ) : (
          <Heart width={24} height={24} id="heart-unliked" onClick={handleClickHeart} />
        )}
        <span>{data.likeCount}</span>
      </div>
      <div className="more-vertical">
        {/* onClick event 설정 */}
        <MoreVertical onClick={handleClickMore} />
      </div>
    </IconContainer>
  );
};

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
