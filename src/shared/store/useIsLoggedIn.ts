import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// ✅ Zustand 상태 타입 정의
interface LoggedInState {
  isFirstMount: boolean;
  isLoggedIn: boolean;
  setIsFirstMount: (isFirstMount: boolean) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

// ✅ Zustand Store 생성 (persist 적용)
const useIsLoggedInStore = create<LoggedInState>()(
  persist(
    (set) => ({
      isFirstMount: true,
      isLoggedIn: false,
      setIsFirstMount: (isFirstMount) => set({ isFirstMount }),
      setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
    }),
    {
      name: 'is-logged-in-store', // 저장될 key 이름
      storage: createJSONStorage(() => sessionStorage), // sessionStorage 사용 (localStorage로 변경 가능)
    },
  ),
);

export default useIsLoggedInStore;
