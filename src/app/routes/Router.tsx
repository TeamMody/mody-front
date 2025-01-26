import { createBrowserRouter } from 'react-router';
import { RootLayout } from '@app/layout';
import {
  HomePage,
  BodySurveyPage,
  BodyTypePage,
  StyleSurveyPage,
  RecommendationResultPage,
} from '@pages/home';
import { MyPage } from '@pages/my';
import { OnboardingPage, InputUser } from '@pages/onboarding';
import SignUpPage from '@pages/onboarding/ui/SignUpMain';
import SignInPage from '@pages/onboarding/pages/SignInPage';
import { CreatePost } from '@pages/post/components/CreatePost';
import { PostPage, CreatePost, CameraPage, CapturedImgPage } from '@pages/post';

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
        children: [
          { index: true, element: <PostPage /> },
          { path: 'createPost', element: <CreatePost isOpened={true} /> },
          { path: 'cameraPage', element: <CameraPage /> },
          { path: 'capturedImgPage', element: <CapturedImgPage /> },
        ],
      },
      {
        path: 'my',
        children: [
          { index: true, element: <MyPage /> },
          { path: 'createPost', element: <CreatePost isOpened={true} /> },
        ],
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
      {
        path: 'signup',
        element: <SignUpPage />,
      },
      {
        path: 'signin',
        element: <SignInPage />,
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
