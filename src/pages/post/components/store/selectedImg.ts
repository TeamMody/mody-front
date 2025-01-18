import { create } from 'zustand';
interface MemoState {
  image: '';
  setImg: (newImg: string | undefined) => void;
  images: string[];
  setImages: (newImg: string | undefined | boolean) => void;
  reset: () => void;
}
export const useImagesStore = create<MemoState>((set: any) => ({
  image: '',
  setImg: (newImg: string | undefined) => set({ image: newImg }),
  images: [],
  setImages: (newImg: string | undefined | boolean) =>
    set((prev: any) => {
      if (!prev.images.includes(newImg)) {
        return { images: [...prev.images, newImg] };
      }
      return prev;
    }),
  reset: () => set({ image: '', images: [] }),
}));
