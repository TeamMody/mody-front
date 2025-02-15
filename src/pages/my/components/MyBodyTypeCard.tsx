import { IcRightArrow } from '@shared/assets/icon/ic-right-arrow';
import { RecommendationModal } from '@pages/my/components/modal/RecommendationModal';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { BodyAnalysisResponse } from '@shared/types';
import { useControlModal } from '@my/hooks/useControlModal';
interface MyBodyTypeCardProps {
  img?: string;
  bodyType?: string;
  data: BodyAnalysisResponse | undefined;
}

export const MyBodyTypeCard = ({ img, bodyType, data }: MyBodyTypeCardProps) => {
  const navigate = useNavigate();
  const { modalState, setModalState } = useControlModal();
  const handleNavigate = () => {
    navigate('/body-type', { state: { result: data } });
  };

  return (
    <>
      <Container onClick={() => (bodyType ? handleNavigate() : setModalState(true))}>
        <MyBodyType>
          <span>{bodyType ? bodyType + ' 타입' : '나의 체형 타입은?'}</span>
          <span>
            {bodyType
              ? data?.bodyTypeAnalysis.description.slice(0, 16) + '...'
              : '나의 체형 진단 받으러 가기'}
          </span>
        </MyBodyType>
        <button onClick={() => (bodyType ? handleNavigate() : setModalState(true))}>
          <IcRightArrow />
        </button>
      </Container>

      <RecommendationModal
        isOpened={modalState}
        content="내 체형을 분석하러 가볼까요?"
        btnText="체형 분석하기"
        onClose={() => setModalState(false)}
        img={img}
      />
    </>
  );
};

const Container = styled.div`
  width: calc(100% - 10.513vw);
  margin: 1.896vh 5.128vw 2.844vh 5.385vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.244vh 4.359vw 1.244vh 4.103vw;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const MyBodyType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > span:nth-child(1) {
    font-size: ${({ theme }) => theme.fonts.body_bold_16px};
  }

  & > span:nth-child(2) {
    font-size: ${({ theme }) => theme.fonts.detail_medium_12px};
  }
`;
