import { uploadImageToS3 } from './uploadImage.ts';
import { submitSignup } from './signup.ts';
import { convertSingleImgToWebP } from '@shared/utils/convertToWebP.ts';

/**
 * 회원가입 폼 제출 핸들러
 * @param {React.FormEvent<HTMLFormElement>} e 폼 제출 이벤트
 * @param {number} curIdx 현재 진행 단계
 * @param {Function} getValues React Hook Form의 getValues 함수
 */
export const handleOnSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  curIdx: number,
  getValues: any,
) => {
  e.preventDefault();
  if (curIdx !== 2) return;

  try {
    const { birthday, height, sex, image, nickname } = getValues();
    const birthDate = `${birthday.year}-${String(birthday.month).padStart(2, '0')}-${String(
      birthday.day,
    ).padStart(2, '0')}`;

    // 이미지 업로드 실행 (이미지가 있을 경우)
    let profileImageUrl = '';
    if (image.length > 0) {
      const convertedImage = await convertSingleImgToWebP({ img: image[0] });
      profileImageUrl = await uploadImageToS3(convertedImage, image);
    }

    const body = { nickname, birthDate, gender: sex, height, profileImageUrl };

    // 회원가입 API 요청
    await submitSignup(body);
  } catch (error) {
    console.error('❌ 회원가입 처리 중 오류 발생:', error);
  }
};
