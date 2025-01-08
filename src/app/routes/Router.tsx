import { createBrowserRouter } from 'react-router';

import { RootLayout } from '@app/layout';
import { HomePage, BodySurveyPage } from '@pages/home';
import { PostPage } from '@pages/post';
import { MyPage } from '@pages/my';
import { OnboardingPage } from '@pages/onboarding';

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
    element: <OnboardingPage />,
  },
  {
    path: 'body-survey',
    element: <BodySurveyPage />
  }
]);
