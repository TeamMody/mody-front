import { useState } from 'react';

export const useWeather = () => {
  const [weather, setWeather] = useState(0);
  const isWeatherSelected = weather !== 0;
  return { weather, setWeather, isWeatherSelected };
};
