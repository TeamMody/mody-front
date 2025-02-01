import { create } from 'zustand';

interface TokenState {
  accessToken: string;
  setAccessToken: (token: string) => void;
  logOut: () => void;
}

const useAuthStore = create<TokenState>((set) => ({
  accessToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNyIsImlhdCI6MTczODM5NTc4OCwiZXhwIjoxNzM4NDMxNzg4fQ.tsL2rpQ2JWEDhj-7CxLm5n7XcnJ08U1IrVc4d_jQMKU',
  setAccessToken: (token: string) => set({ accessToken: token }),
  logOut: () => set({ accessToken: '' }),
}));

export default useAuthStore;
