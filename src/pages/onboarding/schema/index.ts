import { z } from 'zod';

const ACCEPTED_IMAGE_MIME_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const UserInfoSchema = z.object({
  image: z
    .any()
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      'jpeg,jpg,png,webp만 업로드 가능합니다.',
    )
    .optional(),
  previewImage: z.string().optional(),
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
