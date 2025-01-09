import { subBanner } from '@shared/apis/home/mocks.ts';
import SubBanner from '@home/components/SubBanner.tsx';
import styled from 'styled-components';

const SubRecommendation = () => {
  return (
    <SubContainer>
      <SubBannerText>이런 추천은 어때요?</SubBannerText>
      <SubBannerContainer>
        {subBanner.map((banner) => (
          <SubBanner key={banner.id} {...banner} />
        ))}
      </SubBannerContainer>
    </SubContainer>
  );
};

export default SubRecommendation;

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
`;

const SubBannerText = styled.p`
  font: ${({ theme }) => theme.fonts.heading_bold_22px};
  margin-left: 20px;
`;

const SubBannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0 20px;
  gap: 16px;
`;
