import styled from 'styled-components';
import ProgressBar from '@shared/ui/ProgressBar';
import { useState } from 'react';
import Heart from '@shared/assets/icon/ic-heart.svg?react';
import MoreVertical from '@shared/assets/icon/ic-more-vertical.svg?react';
import FullHeart from '@shared/assets/icon/ic-full-heart.svg?react';

interface PostPropsType {
  data: {
    images: string[];
    name: string;
    type: string;
    description: string;
    likeCount: number;
    isLiked: boolean;
  };
}

const Post = ({ data }: PostPropsType) => {
  const [imgIdx, setImgIdx] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <PostContainer bgImage={data.images[imgIdx]}>
      <ProgressBar length={data.images.length} curIdx={imgIdx}></ProgressBar>
      <InfoContainer isExpanded={isExpanded} onClick={() => setIsExpanded((prev) => !prev)}>
        <UserInfo>
          <span className="user-name">{data.name}</span>
          <span className="user-type">{data.type}</span>
          {isExpanded && <IconBox data={data} />}
        </UserInfo>
        <DescriptionContainer>
          <p className={`description ${isExpanded ? 'expanded' : ''}`}>
            {data.description}
            <span className="more-btn">{isExpanded ? '접기' : '더보기'}</span>
          </p>
          {!isExpanded && <IconBox data={data} />}
        </DescriptionContainer>
      </InfoContainer>
    </PostContainer>
  );
};

const IconBox = ({ data }: PostPropsType) => {
  return (
    <IconContainer>
      <div className="heart">
        {/* onClick event 설정 */}
        {data.isLiked ? <FullHeart /> : <Heart />}
        <span>{data.likeCount}</span>
      </div>
      <div className="more-vertical">
        {/* onClick event 설정 */}
        <MoreVertical />
      </div>
    </IconContainer>
  );
};

const PostContainer = styled.div<{ bgImage: string }>`
  width: 100%;
  height: 100%;
  border: 1px solid white;
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray600};
  background-image: url(${({ bgImage }) => bgImage});
  background-size: contain;
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
  height: ${({ isExpanded }) => (isExpanded ? '50%' : '20%')};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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
    transition: height 1s ease; /* 부드러운 전환 효과 */

    &.expanded {
      height: auto; /* 확장 시 높이 자동 */
      -webkit-line-clamp: unset; /* 줄 수 제한 해제 */
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
// p태그 가운데 정렬 px단위 말고 해결할 수 있나 ?

const IconContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;

  div {
    width: 50%;
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
