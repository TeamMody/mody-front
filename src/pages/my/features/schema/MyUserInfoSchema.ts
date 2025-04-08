import { z } from 'zod';

const ACCEPTED_IMAGE_MIME_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const UserInfoSchema = z.object({
  image: z
    .any()

    .optional(),
  nickname: z
    .string()
    .min(1)
    .max(12)
    .regex(/^[a-zA-Z0-9가-힣\s]+$/, '닉네임에 특수문자를 포함할 수 없습니다.') // 허용된 문자만 입력
    .refine((value) => value.trim() !== '', '닉네임은 공백만 입력할 수 없습니다.') // 공백만 입력 방지
    .refine((value) => value.trimStart() === value, '닉네임은 첫 글자가 공백일 수 없습니다.'),
  birthday: z.object({
    year: z.number(),
    month: z.number(),
    day: z.number(),
  }),
  sex: z.string(),
  height: z.number(),
});

export type MyUserInfoSchemaType = z.infer<typeof UserInfoSchema>;
