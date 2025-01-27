import { create } from 'zustand';

interface TokenState {
  accessToken: string;
  setAccessToken: (token: string) => void;
  logOut: () => void;
}

const useAuthStore = create<TokenState>((set) => ({
  accessToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNzM3OTg3MTgzLCJleHAiOjE3MzgwMjMxODN9.sz2TLEIEz7MyjQTcPCgfg_X8sSAg4qWUI9qRe785cUs',
  setAccessToken: (token: string) => set({ accessToken: token }),
  logOut: () => set({ accessToken: '' }),
}));

export default useAuthStore;
