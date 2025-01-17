import axios from 'axios';

//auth
export const authApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}/auth`,
  timeout: 5000,
});

//Oauth
export const OAuthApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}/oauth2`,
  timeout: 5000,
});

//style-analysis
export const styleAnalysisApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}/style-analysis`,
  timeout: 5000,
});

//body-analysis
export const bodyAnalysisApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}/body-analysis`,
  timeout: 5000,
});

//posts
export const postsApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}/posts`,
  timeout: 5000,
});
