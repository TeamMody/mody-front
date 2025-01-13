import { createBrowserRouter } from 'react-router';
import { RootLayout } from '@app/layout';
import {
  HomePage,
  BodySurveyPage,
  BodyTypePage,
  StyleSurveyPage,
  RecommendationResultPage,
} from '@pages/home';
import { PostPage } from '@pages/post';
import { MyPage } from '@pages/my';
import { OnboardingPage, InputUser } from '@pages/onboarding';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'post',
        element: <PostPage />,
      },
      {
        path: 'my',
        element: <MyPage />,
      },
    ],
  },
  {
    path: '/onboarding',
    children: [
      {
        index: true,
        element: <OnboardingPage />,
      },
      {
        path: 'inputuser',
        element: <InputUser />,
      },
    ],
  },
  {
    path: 'body-survey',

    element: <BodySurveyPage />,
  },
  {
    path: 'body-type',
    element: <BodyTypePage />,
  },
  {
    path: 'style-survey',
    element: <StyleSurveyPage />,
  },
  {
    path: 'recommendation-result',
    element: <RecommendationResultPage />,
  },
]);
