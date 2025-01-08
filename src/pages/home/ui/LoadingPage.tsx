import styled from 'styled-components';
import IcLoading from '@shared/assets/icon/ic-loading.svg';
import IcBgLoading from '@shared/assets/icon/ic-bg-loading.svg';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export const LoadingPage = () => {
  const navigate = useNavigate();
  const name= "이름"

  const handleNavigate = () => {
    setTimeout(() => {
      navigate('/body-type');
    }, 3000);
  }

  // 임시 로딩
  useEffect(() => {
    handleNavigate();
  }, []);

  return (
    <>
      <Container>
        <Loading src={IcLoading}/>
        <Text>모디가 {name} 님의<br/>체형을 분석 중이에요!</Text>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${IcBgLoading}) no-repeat center;
  background-size: cover;
  gap: 25px;
`;

const Text = styled.p`
  font: ${({ theme }) => theme.fonts.heading_bold_24px};
  text-align: center;
`;

const Loading = styled.img`
  animation: spin 2s linear infinite;
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
