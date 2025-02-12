import { create } from 'zustand';

interface UsePostIdStore {
  postId: number;
  setPostId: (postId: number) => void;
}

export const usePostIdStore = create<UsePostIdStore>((set) => ({
  postId: -1,
  setPostId: (postId: number) => set({ postId }),
}));
