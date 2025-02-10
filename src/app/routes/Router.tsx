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
import { PostPage, CreatePost, CameraPage, CapturedImgPage } from '@pages/post';
import Redirect from '@shared/ui/Redirect';
import PostDetailPage from '@pages/my/ui/PostDetailPage';
import EditPostPage from '@pages/post/ui/EditPostPage';

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
          { path: 'createpost', element: <CreatePost isOpened={true} /> },
          { path: 'camerapage', element: <CameraPage /> },
          { path: 'capturedimgpage', element: <CapturedImgPage /> },
        ],
      },
      {
        path: 'my',
        children: [
          { index: true, element: <MyPage /> },
          { path: 'createpost', element: <CreatePost isOpened={true} /> },
          { path: 'mypost', element: <PostDetailPage /> },
          { path: 'likepost', element: <PostDetailPage /> },
        ],
      },
      {
        path: 'redirect',
        element: <Redirect />,
      },
    ],
  },
  {
    path: 'onboarding',
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
    path: 'recommendations-survey',
    element: <StyleSurveyPage />,
  },
  {
    path: 'recommendation-result',
    element: <RecommendationResultPage />,
  },
  {
    path: 'post/editpost',
    element: <EditPostPage />,
  },
]);
