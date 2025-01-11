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
  height: z.number().min(100).max(250),
});

export type UserInfoSchemaType = z.infer<typeof UserInfoSchema>;
