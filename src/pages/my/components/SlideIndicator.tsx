import styled from 'styled-components';

const SlideIndicator = ({ activeTabIndex }: { activeTabIndex: number }) => {
  return <IndicatorWrapper $activeTabIndex={activeTabIndex} />;
};
const IndicatorWrapper = styled.div<{ $activeTabIndex: number }>`
  position: absolute;
  bottom: 0;
  left: ${({ $activeTabIndex }) => `calc(${$activeTabIndex * 33.4 + 10.1}%)`};
  width: 12.8%;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.green500};
  transition: left 0.3s ease-out;
`;

export default SlideIndicator;
