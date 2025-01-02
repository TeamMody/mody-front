import styled from 'styled-components';

interface SlideIndicatorProps {
  activeTab: string;
}

const SlideIndicator = ({ activeTab }: SlideIndicatorProps) => {
  return <IndicatorWrapper $activeTab={activeTab} />;
};

const IndicatorWrapper = styled.div<{ $activeTab: string }>`
  position: absolute;
  bottom: 0;
  left: ${({ $activeTab }) => {
    switch ($activeTab) {
      case 'recommend':
        return '12.5%';
      case 'post':
        return '44%';
      case 'like':
        return '75.5%';
      default:
        return '0';
    }
  }};
  width: 55px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.green500};
  transition: left 0.3s ease-out;
`;

export default SlideIndicator;
