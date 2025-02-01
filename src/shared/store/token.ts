import { create } from 'zustand';

interface TokenState {
  accessToken: string;
  setAccessToken: (token: string) => void;
  logOut: () => void;
}

const useAuthStore = create<TokenState>((set) => ({
  accessToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNCIsImlhdCI6MTczODQwMzc3MiwiZXhwIjoxNzM4NDM5NzcyfQ.2vEH1eTxwDryXUh1GZ3pO0bOQVJeLzRdGTRaUKUZVMo',
  setAccessToken: (token: string) => set({ accessToken: token }),
  logOut: () => set({ accessToken: '' }),
}));

export default useAuthStore;
