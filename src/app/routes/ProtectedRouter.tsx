import { Navigate, Outlet } from 'react-router-dom';
import useIsLoggedInStore from '@shared/store/useIsLoggedIn';

const ProtectedRoute = () => {
  const { isLoggedIn } = useIsLoggedInStore.getState();

  // ✅ 로그인 상태면 "/home"으로 이동
  if (isLoggedIn) {
    return <Navigate to="/home" replace />;
  }

  // ✅ 로그인되지 않았으면 그대로 해당 라우트 렌더링
  return <Outlet />;
};

export default ProtectedRoute;
