import { RouterProvider } from 'react-router';
import { router } from '@app/routes/';
import useAuthStore from '@shared/store/token';
import useRefreshMutation from '@shared/hooks/useRefreshMutation';
import { useEffect } from 'react';

export const AppRouterProvider = () => {
  const { accessToken } = useAuthStore();
  const mutation = useRefreshMutation();
  useEffect(() => {
    mutation.mutate();
  }, [accessToken]);
  return <RouterProvider router={router} />;
};
