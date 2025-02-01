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

  // useEffect(() => {
  //   const testFetch = async () => {
  //     const response = await fetch('https://kkoalla.app:8443/auth/reissue', {
  //       method: 'POST',
  //       credentials: 'include', // withCredentials 역할
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     console.log(await response.json());
  //   };
  //   testFetch();
  // }, [accessToken]);
  return <RouterProvider router={router} />;
};
