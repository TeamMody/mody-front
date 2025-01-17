import axios from 'axios';

//auth

export const authApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}/auth`,
});

//Oauth
export const OAuthApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}/oauth2`,
});

//style-analysis
export const styleAnalysisApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}/style-analysis`,
});

//body-analysis
export const bodyAnalysisApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}/body-analysis`,
});

//posts
export const postsApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}/posts`,
});
