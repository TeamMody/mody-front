import styled from 'styled-components';
import IcLoading from '@icon/ic-loading.svg';
import IcLoadingStyle from '@icon/ic-loading-style.svg';
import IcBgLoading from '@icon/ic-bg-loading.svg';
import React from 'react';
import { RecommendationType } from '@shared/types';

interface LoadingProps {
  type: RecommendationType;
}

export const RecommendationLoading: React.FC<LoadingProps> = ({ type }) => {
  const name = '이름';
  const image = type === RecommendationType.STYLE ? IcLoadingStyle : IcLoading;

  const text = type === RecommendationType.BODY_TYPE
    ? `모디가 ${name} 님의\n체형을 분석 중이에요!`
    : `모디가 ${name} 님의\n스타일을 추천중이에요!`;

  return (
    <>
      <Container>
        <LoadingImage $type={type} src={image} />
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

const LoadingImage = styled.img<{ $type: string }>`
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
