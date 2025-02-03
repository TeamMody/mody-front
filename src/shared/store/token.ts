import { create } from 'zustand';

interface TokenState {
  accessToken: string;
  setAccessToken: (token: string) => void;
  logOut: () => void;
}

const useAuthStore = create<TokenState>((set) => ({
  accessToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNCIsImlhdCI6MTczODU5NDQ4NCwiZXhwIjoxNzM4NjMwNDg0fQ.n8Oavtoo7MG0xwGXyM_G1_4MU3JNGSP5Et9gy68wA7k',
  setAccessToken: (token: string) => set({ accessToken: token }),
  logOut: () => set({ accessToken: '' }),
}));

export default useAuthStore;
