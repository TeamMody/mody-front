import styled from 'styled-components';

interface ProgressBarPropsType {
  length: number;
  curIdx: number;
}

const ProgressBar = ({ length, curIdx }: ProgressBarPropsType) => {
  return <Container>ProgressBar</Container>;
};

const Container = styled.div``;
export default ProgressBar;
