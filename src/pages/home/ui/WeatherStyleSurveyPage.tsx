import AppBar from '@shared/ui/AppBar.tsx';
import IcLeftArrow from '@icon/ic-left-arrow.svg';
import { useNavigate } from 'react-router';
import { HeaderAction } from '@shared/types';
import styled from 'styled-components';
import { useGetStyleCategories } from '@home/feature/hooks/query/useGetStyleCategories.ts';
import { Loading } from '@shared/ui/Loading.tsx';
import StyleSurvey from '@home/components/StyleSurvey.tsx';
import CustomButton from '@shared/ui/CustomButton.tsx';
import Weather from '@home/components/Weather.tsx';
import { useStyleSurveyStore } from '@home/feature/store/useStyleSurveyStore.ts';
import { useEffect } from 'react';
import { useWeather } from '@home/feature/hooks/custom/useWeather.ts';

export const WeatherStyleSurveyPage = () => {
  const navigate = useNavigate();
  const { weather, setWeather, isWeatherSelected } = useWeather();
  const { resetKeywords, selectedKeywords } = useStyleSurveyStore();
  const isButtonActive = selectedKeywords.liked.length > 0 && isWeatherSelected;
  const leftHeaderAction: HeaderAction = {
    icon: IcLeftArrow,
    onClick: () => navigate(-1),
  };
  const { data, isPending, isError } = useGetStyleCategories();

  useEffect(() => {
    resetKeywords();
  }, []);

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    alert('스타일 카테고리 정보를 불러오는 중 에러가 발생했습니다.');
    navigate(-1);
  }

  return (
    <Wrapper>
      <AppBar title="날씨에 맞는 패션 추천" leftHeaderAction={leftHeaderAction} />
      <Inner>
        <Weather weather={weather} onClick={setWeather} />
        <StyleSurvey category="liked" keywords={data?.result.styleCategories!} />
      </Inner>
      <ButtonWrapper>
        <CustomButton
          label="스타일 추천 받기"
          onClick={() => console.log('onClick')}
          active={isButtonActive}
          paddingTop="19px"
          paddingBottom="19px" />
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 440px;
  height: 100vh;
  background-color: #121212;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 36px 20px 34px 20px;
  gap: 3em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px 34px 20px;
  margin-top: auto;
`;
