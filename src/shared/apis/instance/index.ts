import axios from 'axios';
import useAuthStore from '@shared/store/token';
import useRefreshMutation from '@shared/hooks/useRefreshMutation';

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
];

apiInstance.interceptors.request.use((config) => {
  const apiURL = config.url;
  if (apiURL && nonToken.includes(apiURL)) return config;

  const { accessToken } = useAuthStore.getState();
  console.log(accessToken);
  if (accessToken) {
    (config.headers as Record<string, any>).Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// apiInstance.interceptors.response.use(
//   (response) => response, // 정상적인 응답은 그대로 반환
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401) {
//       if (!originalRequest._retry) {
//         originalRequest._retry = true;

//         try {
//           const { mutateAsync: refreshAccessToken } = useRefreshMutation();
//           const newAccessToken = await refreshAccessToken(); // 새 액세스 토큰 요청

//           // ✅ 새 토큰을 저장하고 요청 헤더 업데이트 후 재시도
//           const { setAccessToken } = useAuthStore.getState();
//           setAccessToken(newAccessToken);
//           originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

//           return apiInstance(originalRequest); // 원래 요청 재시도
//         } catch (refreshError) {
//           window.location.href = `${import.meta.env.VITE_LOCAL_ADDRESS}/onboarding`; // 로그인 페이지로 리다이렉트
//           return Promise.reject(refreshError);
//         }
//       }
//     }

//     return Promise.reject(error); // 다른 에러는 그대로 전달
//   },
// );
