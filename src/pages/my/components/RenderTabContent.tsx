import styled from 'styled-components';
import MyAndLikePosts from '@pages/my/components/MyAndLikePosts';
import RecommendResults from './RecommendResults';

const RenderTabContent = ({ activeTab }: { activeTab: string }) => {
  return (
    <Wrapper>
      {activeTab === 'recommend' ? (
        <RecommendResults activeTab={activeTab} />
      ) : (
        <MyAndLikePosts activeTab={activeTab} />
      )}
    </Wrapper>
  );
};

export default RenderTabContent;

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: auto;
`;
