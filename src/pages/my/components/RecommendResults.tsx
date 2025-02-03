import styled from 'styled-components';
import NoPosts from '@pages/my/components/NoPosts';

const RecommendResults = ({ activeTab }: { activeTab: string }) => {
  return <NoPosts activeTab={activeTab} />;
};

const RecommendResultsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 33.33%;
  width: 100%;
  height: 100%;
  gap: 0.7vw;
  overflow-y: auto;
`;

export default RecommendResults;
