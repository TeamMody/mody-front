import { useMutation } from '@tanstack/react-query';
import { sendVerify } from '@shared/apis/auth/auth.ts';

export const useSendMail = () => {
  return useMutation({
    mutationFn: (email: string) => sendVerify(email),
  })
}
