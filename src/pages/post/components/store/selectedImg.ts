import { create } from 'zustand';
interface MemoState {
  currentImage: images;
  setImg: (newImg: string | undefined) => void;
  images: images[];
  setImages: (newImg: string) => void;
  selectedImages: { [key: number]: boolean }; // order를 key로 선택 상태를 관리
  setSelectedImage: (order: number) => void;
  reset: () => void;
}
interface images {
  image: string | undefined;
  order: number;
}
export const useImagesStore = create<MemoState>((set) => ({
  currentImage: { image: '', order: 0 },
  setImg: (newImg) => {
    set((state) => ({ currentImage: { image: newImg, order: state.images.length + 1 } }));
  },
  images: [],
  setImages: (newImg) => {
    set((state) => ({
      images: [...state.images, { image: newImg, order: state.images.length + 1 }],
    }));
  },
  reset: () => set({ currentImage: { image: '', order: 0 }, images: [] }),
  selectedImages: {}, // 각 이미지의 선택 상태를 담을 객체
  setSelectedImage: (order) =>
    set((state) => {
      // 이미 선택된 이미지를 클릭하면 상태를 반전
      const newSelectedImages = { ...state.selectedImages };
      newSelectedImages[order] = !newSelectedImages[order];
      return { selectedImages: newSelectedImages };
    }),
}));
