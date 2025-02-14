import { apiInstance } from '@shared/apis/instance';
import { useNavigate } from 'react-router';
import useIsLoggedInStore from '@shared/store/useIsLoggedIn';

export const useLogOut = async () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useIsLoggedInStore.getState();
  console.log('useLogOut 실행됨');
  try {
    const res = await apiInstance.post('/auth/logout');
    console.log(res);
    if (res.status === 200) {
      setIsLoggedIn(false);
      navigate('/', { replace: true });
    }
  } catch (error) {
    console.error(error);
  }
};
