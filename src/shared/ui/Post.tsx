import styled from 'styled-components';
import ProgressBar from '@shared/ui/ProgressBar';
import { useState } from 'react';
import Heart from '@shared/assets/icon/ic-heart.svg?react';
import MoreVertical from '@shared/assets/icon/ic-more-vertical.svg?react';

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
  return (
    <PostContainer bgImage={data.images[imgIdx]}>
      <ProgressBar length={data.images.length} curIdx={imgIdx}></ProgressBar>
      <InfoContainer>
        <UserInfo>
          <span className="user-name">{data.name}</span>
          <span className="user-type">{data.type}</span>
        </UserInfo>
        <DescriptionContainer>
          <p className="description">
            {data.description}
            <span className="more-btn">더보기</span>
          </p>
          <IconContainer>
            <div className="heart">
              <Heart></Heart>
              <span>{data.likeCount}</span>
            </div>
            <div className="more-vertical">
              <MoreVertical></MoreVertical>
            </div>
          </IconContainer>
        </DescriptionContainer>
      </InfoContainer>
    </PostContainer>
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

const InfoContainer = styled.div`
  padding: 0px 15px 24px 15px;
  background-color: transparent;

  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 20%;
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
