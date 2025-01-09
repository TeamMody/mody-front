import styled from 'styled-components';

interface ProgressBarPropsType {
  length: number;
  curIdx: number;
}

const ProgressBar = ({ length, curIdx }: ProgressBarPropsType) => {
  const circleArr = Array.from({ length });
  return (
    <Container>
      {circleArr.map((_, idx) => (
        <Circle key={idx} isActive={idx === curIdx} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  gap: 8px;
`;

const Circle = styled.div<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${({ theme, isActive }) => (isActive ? '#00ff99' : theme.colors.gray500)};
`;

export default ProgressBar;
