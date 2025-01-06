import styled from 'styled-components';
import ImgBannerBodyType from '@shared/assets/img/img-banner-body-type.png';
import ImgBannerItem from '@shared/assets/img/img-banner-item.png';
import ImgBannerStyle from '@shared/assets/img/img-banner-style.png';
import TabContents from './TabContents';
const RenderTabContent = ({ activeTab }: { activeTab: string }) => {
  return (
    <Wrapper>
      {(() => {
        switch (activeTab) {
          case 'recommend':
            return <TabContents img={ImgBannerBodyType} divide={3} activeTab={activeTab} />;
          case 'post':
            return <TabContents img={ImgBannerItem} divide={2} activeTab={activeTab} />;
          case 'like':
            return <TabContents img={ImgBannerStyle} divide={2} activeTab={activeTab} />;
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
  height: 100%;
  overflow-y: auto;
`;
