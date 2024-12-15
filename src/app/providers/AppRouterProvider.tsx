import { RouterProvider } from 'react-router';
import { router } from '../routes';

export const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};
