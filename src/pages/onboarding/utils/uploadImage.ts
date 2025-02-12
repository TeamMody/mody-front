import { apiInstance } from '@shared/apis/instance';

export const uploadImageToS3 = async (image: File): Promise<string> => {
  try {
    const { data } = await apiInstance.post('/image/upload/profiles', {
      filename: image.name,
    });

    const presignedUrl = data.result.presignedUrl;

    const uploadResponse = await fetch(presignedUrl, {
      method: 'PUT',
      headers: { 'Content-Type': image.type },
      body: image,
    });

    if (!uploadResponse.ok) throw new Error(`업로드 실패: ${uploadResponse.statusText}`);

    return presignedUrl.split('?')[0]; // 성공 시 업로드된 이미지 URL 반환
  } catch (error) {
    return ''; // 실패 시 빈 문자열 반환
  }
};
