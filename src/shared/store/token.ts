import { create } from 'zustand';

interface TokenState {
  accessToken: string;
  setAccessToken: (token: string) => void;
  logOut: () => void;
}

const useAuthStore = create<TokenState>((set) => ({
  accessToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNzM4MzA3OTE5LCJleHAiOjE3MzgzNDM5MTl9.k59GoxoGctj8fFzKUXAUJt0A4raeg6zPrArGAjneFWg',
  setAccessToken: (token: string) => set({ accessToken: token }),
  logOut: () => set({ accessToken: '' }),
}));

export default useAuthStore;
