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
// export const SignUpSchema = z
//   .object({
//     email: z.string().email('올바른 이메일 형식이 아닙니다.'),
//     password: z.string().min(8, '비밀번호는 8자 이상이어야 합니다.'),
//     passwordConfirm: z.string(),
//   })
//   .refine((data) => data.password === data.passwordConfirm, {
//     path: ['passwordConfirm'], // 에러가 나타날 경로
//     message: '비밀번호가 일치하지 않습니다.', // 커스텀 메시지
//   });

export type UserInfoSchemaType = z.infer<typeof UserInfoSchema>;
export type EmailSchemaType = z.infer<typeof EmailSchema>;
export type CodeSchemaType = z.infer<typeof CodeSchema>;
// export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
