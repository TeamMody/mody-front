import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MemberInfo } from '@shared/types';

interface MyInfoState {
  myInfo: MemberInfo | null;
  setMyInfo: (myInfo: MemberInfo) => void;
}

export const useMyInfoStore = create<
  MyInfoState, [['zustand/persist', MyInfoState]]
>(
  persist(
    (set) => ({
      myInfo: null,
      setMyInfo: (myInfo: MemberInfo) => set({ myInfo }),
    }),
    {
      name: 'myInfoStore', // 스토리지에 저장될 key 이름
    },
  ),
);
