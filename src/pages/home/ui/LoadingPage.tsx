import styled from 'styled-components';
import IcLoading from '@shared/assets/icon/ic-loading.svg';
import IcLoadingStyle from '@shared/assets/icon/ic-loading-style.svg';
import IcBgLoading from '@shared/assets/icon/ic-bg-loading.svg';
import { useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';

export const LoadingPage = () => {
  const navigate = useNavigate();
  const name = '이름';
  const { type } = useLocation().state;
  const image = type === '스타일 추천' ? IcLoadingStyle : IcLoading;
  const text = type === '스타일 추천'
    ? `모디가 ${name} 님의\n스타일을 추천중이에요!`
    : `모디가 ${name} 님의\n체형을 분석 중이에요!`;
  const handleNavigate = () => {
    setTimeout(() => {
      if (type === '스타일 추천') navigate('/recommendation-result');
      else navigate('/body-type');
    }, 3000);
  };

  // 임시 로딩
  useEffect(() => {
    handleNavigate();
  }, []);

  return (
    <>
      <Container>
        <Loading $type={type} src={image} />
        <Text>{text}</Text>
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
  white-space: pre-wrap;
`;

const Loading = styled.img<{ $type: string }>`
  animation: ${({ $type }) => ($type !== '스타일 추천' ? 'spin 2s linear infinite' : 'bounce 1s linear infinite')};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;
