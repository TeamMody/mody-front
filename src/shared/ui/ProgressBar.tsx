import styled from 'styled-components';

interface ProgressBarPropsType {
  length: number;
  curIdx: number;
  size?: number;
  marginTop?: string;
  imgZoom?: boolean | undefined;
}

const ProgressBar = ({
  length,
  curIdx,
  size = 10,
  marginTop = '8px',
  imgZoom,
}: ProgressBarPropsType) => {
  const circleArr = Array.from({ length });
  return (
    <Container marginTop={marginTop} imgZoom={imgZoom}>
      {circleArr.map((_, idx) => (
        <Circle key={idx} isActive={idx === curIdx} size={size} />
      ))}
    </Container>
  );
};

const Container = styled.div<{ marginTop: string; imgZoom?: boolean | undefined }>`
  margin-top: ${({ marginTop, imgZoom }) => (imgZoom ? '2.725vh' : `${marginTop}`)};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  gap: 8px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
`;

const Circle = styled.div<{ isActive: boolean; size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 100%;
  background-color: ${({ theme, isActive }) => (isActive ? '#00ff99' : theme.colors.gray500)};
`;

export default ProgressBar;
