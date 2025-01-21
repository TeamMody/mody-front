import { z } from 'zod';

const ACCEPTED_IMAGE_MIME_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const UserInfoSchema = z.object({
  image: z
    .any()
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      'jpeg,jpg,png,webp만 업로드 가능합니다.',
    ),
  previewImage: z.string(),
  nickname: z.string().min(1).max(12),
  birthday: z.string(),
  sex: z.string(),
  height: z.string(),
});

export const EmailSchema = z.object({
  email: z.string().email('올바른 이메일 형식이 아닙니다.'),
});

export const CodeSchema = z.object({
  code: z.string().length(8, '인증번호는 8자리여야 합니다.'),
});

export const PasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, '비밀번호는 8자 이상이어야 합니다.')
      .nonempty('비밀번호를 반드시 입력해주세요.'),
    passwordConfirm: z.string().nonempty('비밀번호를 반드시 입력해주세요.'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: '비밀번호가 일치하지 않습니다.',
  });

export type UserInfoSchemaType = z.infer<typeof UserInfoSchema>;
export type EmailSchemaType = z.infer<typeof EmailSchema>;
export type CodeSchemaType = z.infer<typeof CodeSchema>;
export type PasswordSchemaType = z.infer<typeof PasswordSchema>;
