import { z } from 'zod';
export const UserInfoSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: '최소 1글자 입력해주세요' })
    .max(12, { message: '최대 12글자까지 가능합니다.' }),
  birth: z.string(),
  gender: z.string().refine((value) => value === '남자' || value === '여자', {
    message: '남자 또는 여자 중 하나를 입력해주세요',
  }),
  height: z
    .string()
    .trim()
    .refine((val) => val.includes('cm'), { message: 'cm를 포함시켜주세요' }),
});
