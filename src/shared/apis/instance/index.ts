import axios from 'axios';
import useAuthStore from '@shared/store/token';

export const apiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}`,
  timeout: 5000,
  withCredentials: true,
});

async function refreshAccessToken() {
  try {
    const response = await apiInstance.post('/auth/reissue', {});
    const { newAccessToken } = response.data;
    useAuthStore.getState().setAccessToken(newAccessToken); // Zustand 또는 다른 상태 관리 라이브러리에 업데이트
    return newAccessToken;
  } catch (err) {
    console.error('Failed to refresh token:', err);
    throw err;
  }
}

const nonToken = [
  '/auth/signup',
  '/auth/signup/oauth2',
  '/auth/signup/oauth2',
  '/auth/reissue',
  '/auth/login',
];

apiInstance.interceptors.request.use((config) => {
  const apiURL = config.url;
  console.log('잘 먹고 갑니다.');
  if (apiURL && nonToken.includes(apiURL)) return config;

  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    (config.headers as Record<string, any>).Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

apiInstance.interceptors.response.use(null, async (err) => {
  const originalRequest = err.config;
  // const code = err.response?.data?.code;
  const url = err.config.url;

  if (err.response?.status === 401 && !nonToken.includes(url)) {
    try {
      const newAccessToken = await refreshAccessToken();
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return apiInstance(originalRequest); // 원래 요청 재시도
    } catch (refreshError) {
      console.error('Refresh token failed:', refreshError);
      throw refreshError; // 최종적으로 실패하면 상위로 에러 전달
    }
  }

  if (err.response?.status === 401 && url === '/auth/reissue') {
    window.location.href = `${import.meta.env.VITE_LOCAL_ADDRESS}/onboarding`;
  }

  return Promise.reject(err); // 다른 에러는 그대로 전달
});
