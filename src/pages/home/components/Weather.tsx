import styled from 'styled-components';

interface WeatherProps {
  weather: number;
  onClick: (weather: number) => void;
}

const Weather = ({ weather, onClick }: WeatherProps) => {
  return (
    <WeatherContainer>
      <p>오늘의 날씨</p>
      <WeatherInner>
        <WeatherCard onClick={() => onClick(1)} $isActive={weather === 1}>☀️ 맑음</WeatherCard>
        <WeatherCard onClick={() => onClick(2)} $isActive={weather === 2}>☁️ 흐림</WeatherCard>
        <WeatherCard onClick={() => onClick(3)} $isActive={weather === 3}>🌧️ 비</WeatherCard>
        <WeatherCard onClick={() => onClick(4)} $isActive={weather === 4}>❄️ 눈</WeatherCard>
      </WeatherInner>
    </WeatherContainer>
  );
};

export default Weather;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    margin-left: 2px;
    font: ${({ theme }) => theme.fonts.heading_bold_24px};
    color: white;
  }
`;
const WeatherInner = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;
`;

const WeatherCard = styled.div<{ $isActive: boolean }>`
  font: ${({ theme }) => theme.fonts.body_medium_16px};
  padding: 10px 16px 10px 16px;
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.green500 : 'white'};
  border: 0.5px solid ${({ theme, $isActive }) => $isActive ? theme.colors.green500 : 'white'};
  border-radius: 10px;
  background-color: ${({ theme, $isActive }) => $isActive ? theme.colors.green900 : '#66666650'};
`;
