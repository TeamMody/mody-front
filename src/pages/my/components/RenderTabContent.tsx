import LikedPosts from './LikedPosts';
import MyPosts from './MyPosts';
import styled from 'styled-components';
import RecommendResults from './RecommendResults';

const RenderTabContent = ({ activeTab }: { activeTab: string }) => {
  return (
    <Wrapper>
      {(() => {
        switch (activeTab) {
          case 'recommend':
            return <RecommendResults />;
          case 'post':
            return <MyPosts />;
          case 'like':
            return <LikedPosts />;
          default:
            return null;
        }
      })()}
    </Wrapper>
  );
};

export default RenderTabContent;

const Wrapper = styled.div`
  height: 70vh;
  overflow-y: auto;
`;
