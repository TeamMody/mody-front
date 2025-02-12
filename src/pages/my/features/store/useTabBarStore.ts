import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export enum ActiveIndex {
  RECOMMEND = 1,
  MY = 2,
  LIKE = 3,
}

interface UseTabBarStore {
  activeIndex: ActiveIndex;
  setActiveIndex: (index: number) => void;
}

export const useTabBarStore = create<UseTabBarStore>()(
  persist(
    (set) => ({
      activeIndex: ActiveIndex.RECOMMEND,
      setActiveIndex: (activeIndex: ActiveIndex) => set({ activeIndex }),
    }),
    {
      name: 'bottom-navigation-storage',
    },
  ),
);
