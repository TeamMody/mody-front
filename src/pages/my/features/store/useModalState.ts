import { create } from 'zustand';

interface UseModalState {
  modalState: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModalStore = create<UseModalState>((set) => ({
  modalState: false,
  openModal: () => set({ modalState: true }),
  closeModal: () => set({ modalState: false }),
}));
