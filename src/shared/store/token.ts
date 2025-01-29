import { create } from 'zustand';

interface TokenState {
  accessToken: string;
  setAccessToken: (token: string) => void;
  logOut: () => void;
}

const useAuthStore = create<TokenState>((set) => ({
  accessToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNzM4MTI2MTM3LCJleHAiOjE3MzgxNjIxMzd9._e_nu_nmwWS6d3cyi57f_ShzZPrET2zpfOopRIyR6HU',
  setAccessToken: (token: string) => set({ accessToken: token }),
  logOut: () => set({ accessToken: '' }),
}));

export default useAuthStore;
