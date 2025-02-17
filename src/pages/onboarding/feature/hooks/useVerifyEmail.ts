import { useMutation } from '@tanstack/react-query';
import { verifyEmail } from '@shared/apis/auth/auth.ts';

export const useVerifyEmail = (email: string) => {
  return useMutation({
    mutationFn: (code: string) => verifyEmail(email, code)
  })
}
