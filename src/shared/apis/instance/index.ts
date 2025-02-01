import axios from 'axios';
import useAuthStore from '@shared/store/token';

export const apiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}`,
  timeout: 5000,
  withCredentials: true,
});

const nonToken = [
  '/auth/signup',
  '/auth/signup/oauth2',
  '/auth/signup/oauth2',
  '/auth/reissue',
  '/auth/login',
];

apiInstance.interceptors.request.use((config) => {
  const apiURL = config.url;
  if (apiURL && nonToken.includes(apiURL)) return config;

  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    (config.headers as Record<string, any>).Authorization = `Bearer ${accessToken}`;
  }
  console.log(config);
  return config;
});

// apiInstance.interceptors.response.use(null, async (err) => {
//   const originalRequest = err.config;
//   // const code = err.response?.data?.code;
//   const url = err.config.url;

//   if (err.response?.status === 401 && !nonToken.includes(url)) {
//     if (!originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         const newAccessToken = await refreshAccessToken();
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return apiInstance(originalRequest);
//       } catch (refreshError) {
//         // console.error('Refresh token failed:', refreshError);
//         window.location.href = `${import.meta.env.VITE_LOCAL_ADDRESS}/onboarding`; // 로그인 페이지로 리다이렉트
//         return Promise.reject(refreshError);
//       }
//     }
//   }

//   return Promise.reject(err); // 다른 에러는 그대로 전달
// });
