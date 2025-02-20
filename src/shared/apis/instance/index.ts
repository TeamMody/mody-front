import axios from 'axios';
import useAuthStore from '@shared/store/token';
import useIsLoggedInStore from '@shared/store/useIsLoggedIn';

export const apiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}`,
  timeout: 5000,
  withCredentials: true,
});

const nonToken = [
  '/auth/signup',
  '/auth/signup/oauth2',
  '/auth/signup/oauth2',
  '/auth/email/verify/send',
  '/auth/reissue',
  '/auth/login',
  '/auth/logout',
];

apiInstance.interceptors.request.use((config) => {
  const apiURL = config.url;
  if (apiURL && nonToken.includes(apiURL)) return config;

  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    (config.headers as Record<string, any>).Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

apiInstance.interceptors.response.use(
  (response) => response, // 정상적인 응답은 그대로 반환
  async (error) => {
    const originalRequest = error.config;
    const statusCode = error.response.data.code;
    const { isFirstMount, setIsFirstMount } = useIsLoggedInStore.getState();

    // refresh token이 만료됐을 때
    if (
      statusCode === 'REFRESH_TOKEN404' ||
      (error.response.config.url === '/auth/reissue' && error.status === 400)
    ) {
      // onboarding page로 이동할 때마다 reissue를 날림
      if (isFirstMount) {
        return setIsFirstMount(false);
      }
      return (window.location.href = `${import.meta.env.VITE_LOCAL_ADDRESS}`);
    }

    if (error.response?.status === 401 && error.response.config.url !== '/auth/login') {
      try {
        const res = await apiInstance.post('/auth/reissue');
        const newAccessToken = res.data.result.accessToken;

        const { setAccessToken } = useAuthStore.getState();
        setAccessToken(newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return apiInstance(originalRequest); // 원래 요청 재시도
      } catch ( error ) {
        console.error(error);
      }
    }
    return Promise.reject(error); // 다른 에러는 그대로 전달
  },
);
