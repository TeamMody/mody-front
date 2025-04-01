import styled from 'styled-components';
import { useState, memo, forwardRef } from 'react';
import Heart from '@shared/assets/icon/ic-heart.svg?react';
import MoreVertical from '@shared/assets/icon/ic-more-vertical.svg?react';
import FullHeart from '@shared/assets/icon/ic-full-heart.svg?react';
import ImageCarousel from '@shared/ui/ImageCarousel';
import EditBottomSheet from '../../pages/post/components/modal/EditBottomSheetModal';
import Report from '@pages/post/components/Report';
import usePostLike from '@pages/post/hooks/usePostLike';
import { PostData } from '@shared/types/my/my';
import ReportModal from '@pages/post/components/modal/ReportModal';
import { QueryKey } from '@shared/types/post/post';
const Post = memo(
  forwardRef<HTMLDivElement, { data: PostData; queryKey?: QueryKey }>(
    ({ data, queryKey = ['posts'] }, ref) => {
      const [imgIdx, setImgIdx] = useState<number>(0);
      const [isExpanded, setIsExpanded] = useState<boolean>(false);
      const images = data.files;

      return (
        <Container ref={ref}>
          <ImageCarousel
            images={images}
            isExpanded={isExpanded}
            imgIdx={imgIdx}
            setImgIdx={setImgIdx}
          />
          <Info
            $isExpanded={isExpanded}
            data={data}
            setIsExpanded={setIsExpanded}
            queryKey={queryKey}
          />
        </Container>
      );
    },
  ),
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
    $isExpanded,
    data,
    setIsExpanded,
    queryKey,
  }: {
    $isExpanded: boolean;
    data: PostData;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    queryKey: QueryKey;
  }) => {
    const [isMoreClicked, setIsMoreClicked] = useState<boolean>(false);
    const postLikeMutation = usePostLike(queryKey);

    const handleClickMore = (e: React.MouseEvent<SVGElement>) => {
      e.stopPropagation();
      setIsMoreClicked(true);
    };

    const handleClickHeart = (e: React.MouseEvent<SVGElement>) => {
      e.stopPropagation();
      postLikeMutation.mutate(data.postId);
    };

    return (
      <InfoContainer id={data.postId.toString()}>
        <UserInfo $isExpanded={$isExpanded} onClick={() => setIsExpanded((prev) => !prev)}>
          <div className="user">
            <span className="user-name" id={`${data.writerId}`}>
              {data.writerNickName}
            </span>
            <span className="user-type">{data.bodyType} 타입</span>
          </div>
          <p className={`description ${$isExpanded ? 'expanded' : ''}`}>{data.content}</p>
        </UserInfo>
        <DescriptionContainer>
          <div className="heart">
            {data.isLiked ? (
              <FullHeart width={24} height={24} id="heart-liked" onClick={handleClickHeart} />
            ) : (
              <Heart width={24} height={24} id="heart-unliked" onClick={handleClickHeart} />
            )}
            <span>{data.likeCount}</span>
          </div>
          <div className="more-vertical">
            {!data.isMine ? (
              <Report onClick={() => setIsMoreClicked(true)} />
            ) : (
              <MoreVertical onClick={handleClickMore} />
            )}
          </div>
          {!data.isMine ? (
            <ReportModal
              isOpened={isMoreClicked}
              setIsMoreClicked={setIsMoreClicked}
              id={data.postId}
            />
          ) : (
            <EditBottomSheet
              isOpen={isMoreClicked}
              onClose={() => setIsMoreClicked(false)}
              data={data}
            />
          )}
        </DescriptionContainer>
      </InfoContainer>
    );
  },
);

const InfoContainer = styled.div`
  width: 100%;
  height: 20%;
  background-color: transparent;
  padding: 6vh 10px 0 10px;
  position: relative;
  left: 0;
  display: flex;
  gap: 20px;
  transition: height 0.5s ease;
`;

const UserInfo = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
  height: ${({ $isExpanded }) => ($isExpanded ? '40vh' : '15vh')};
  transition:
    transform 0.7s ease,
    height 0.7s ease;
  transform: ${({ $isExpanded }) => ($isExpanded ? 'translateY(-25vh)' : 'translateY(0)')};

  .user {
    display: flex;
    align-items: center;
    gap: 20px;
    & > .user-name {
      font-size: ${({ theme }) => theme.fonts.heading_bold_24px};
    }
    & > .user-type {
      font-size: ${({ theme }) => theme.fonts.heading_medium_18px};
    }
  }

  .description {
    position: relative;
    height: 4vh;
    width: 90%;
    line-height: 110%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;

    &.expanded {
      margin-top: 1vh;
      height: auto;
      -webkit-line-clamp: unset;
      width: 90%;
    }
  }
`;

const DescriptionContainer = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  gap: 15px;

  .more-vertical {
    display: flex;
    align-items: center;
  }
  .heart {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;
  }
`;

export default Post;
