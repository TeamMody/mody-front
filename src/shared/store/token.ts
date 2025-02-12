import { create } from 'zustand';

interface TokenState {
  accessToken: string;
  setAccessToken: (token: string) => void;
  logOut: () => void;
}

const useAuthStore = create<TokenState>((set) => ({
  accessToken: '',
  setAccessToken: (token: string) => set({ accessToken: token }),
  logOut: () => set({ accessToken: '' }),
}));

export default useAuthStore;
