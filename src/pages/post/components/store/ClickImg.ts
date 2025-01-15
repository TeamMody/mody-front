import { create } from 'zustand';
interface MemoState {
  image: '';
  setImg: (newImg: string | undefined) => void;
  images: string[];
  setImages: (newImg: string | undefined) => void;
}
export const useImagesStore = create<MemoState>((set: any) => ({
  image: '',
  setImg: (newImg: string | undefined) => set({ image: newImg }),
  images: [],
  setImages: (newImg: string | undefined) =>
    set((prev: any) => ({ images: [...prev.images, newImg] })), // 함수 기반 업데이트
}));
