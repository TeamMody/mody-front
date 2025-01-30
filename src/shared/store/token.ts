import { create } from 'zustand';

interface TokenState {
  accessToken: string;
  setAccessToken: (token: string) => void;
  logOut: () => void;
}

const useAuthStore = create<TokenState>((set) => ({
  accessToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMiIsImlhdCI6MTczODIwNjQ5NCwiZXhwIjoxNzM4MjQyNDk0fQ.4bcjwM6wqKSl5lm9CV9LekWdCdk4iaczHy6KOn3nRZ8',
  setAccessToken: (token: string) => set({ accessToken: token }),
  logOut: () => set({ accessToken: '' }),
}));

export default useAuthStore;
