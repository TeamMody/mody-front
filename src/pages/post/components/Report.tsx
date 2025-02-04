import ReportIcon from '@shared/assets/icon/ic-report.svg?react';
import styled from 'styled-components';
const Report = () => {
  const handleReport = () => {};
  return (
    <Container onClick={handleReport}>
      <ReportIcon />
      <span>신고하기</span>
    </Container>
  );
};
const Container = styled.div`
  width: 61px;
  height: 21px;
  padding: 0px 2px;
  border-radius: 5px;
  background-color: #686868;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: -30px;
  right: -5px;
  span {
    font-size: ${({ theme }) => theme.fonts.detail_medium_12px};
  }
`;

export default Report;
