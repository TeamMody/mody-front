import { create } from 'zustand';

interface TokenState {
  accessToken: string;
  setAccessToken: (token: string) => void;
  logOut: () => void;
}

// export const useAuthStore = create<TokenState>((set) => ({
//   accessToken:
//     'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNyIsImlhdCI6MTczODg2MTU5NSwiZXhwIjoxNzM4ODk3NTk1fQ.9FEeU7wwDNv6PoHMnO0Ti9IZKu5wteMS6lWA1sW_GMw',
//   setAccessToken: (token: string) => set({ accessToken: token }),
//   logOut: () => set({ accessToken: '' }),
// }));

export const useAuthStore = create<TokenState>()(
  persist(
    (set) => ({
      accessToken: '',
      setAccessToken: (token: string) => set({ accessToken: token }),
      logOut: () => set({ accessToken: '' }),
    }),
    {
      name: 'access-token-storage',
    },
  ),
);

export default useAuthStore;
