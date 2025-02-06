import { create } from 'zustand';

interface UsePostId {
  postId: number;
  setPostId: (postId: number) => void;
}

export const usePostIdStore = create<UsePostId>((set) => ({
  postId: -1,
  setPostId: (postId: number) => set({ postId }),
}));
