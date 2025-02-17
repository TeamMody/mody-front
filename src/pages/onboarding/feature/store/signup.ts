import { create } from 'zustand';

interface SignupState {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

const useSignupStore = create<SignupState>((set) => ({
  email: '',
  setEmail: (email) => set(() => ({ email })),
  password: '',
  setPassword: (password) => set(() => ({ password })),
}));
export default useSignupStore;
