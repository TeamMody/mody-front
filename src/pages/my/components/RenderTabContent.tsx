import LikedPosts from './LikedPosts';
import MyPosts from './MyPosts';
import RecommendResults from './RecommendResults';
import styled from 'styled-components';

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
  flex: 1;
  overflow-y: auto;
`;
