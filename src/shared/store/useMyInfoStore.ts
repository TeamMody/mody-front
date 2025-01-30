import { create } from 'zustand';
import { MemberInfo } from '@shared/types';

interface MyInfoState {
  myInfo: MemberInfo | null;
  setMyInfo: (myInfo: MemberInfo) => void;
}

export const useMyInfoStore = create<MyInfoState>((set) => ({
  myInfo: null,
  setMyInfo: (myInfo: MemberInfo) => set({ myInfo }),
}));
