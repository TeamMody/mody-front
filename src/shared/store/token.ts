import { create } from 'zustand';

interface TokenState {
  accessToken: string;
  setAccessToken: (token: string) => void;
  logOut: () => void;
}

const useAuthStore = create<TokenState>((set) => ({
  accessToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNCIsImlhdCI6MTczODQyNDQ3MywiZXhwIjoxNzM4NDYwNDczfQ.muZ5nJevOXZzijDy-Qi-R7opIizz5b4cH5Z6TU6L3bs',
  setAccessToken: (token: string) => set({ accessToken: token }),
  logOut: () => set({ accessToken: '' }),
}));

export default useAuthStore;
