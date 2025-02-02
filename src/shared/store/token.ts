import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TokenState {
  accessToken: string;
  setAccessToken: (token: string) => void;
  logOut: () => void;
}

/*const useAuthStore = create<TokenState>((set) => ({
  accessToken: '',
  setAccessToken: (token: string) => set({ accessToken: token }),
  logOut: () => set({ accessToken: '' }),
}));*/

export const useAuthStore = create<TokenState>()(
  persist(
    (set) => ({
      accessToken: '',
      setAccessToken: (token: string) => set({ accessToken: token }),
      logOut: () => set({ accessToken: ''}),
    }),
    {
      name: 'access-token-storage',
    },
  ),
);

export default useAuthStore;
