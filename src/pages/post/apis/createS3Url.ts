import { presignedUrlProps } from './createPresignedUrl';
export const createS3url = async ({
  selectedImages,
  presignedUrls,
}: {
  selectedImages: string[];
  presignedUrls: presignedUrlProps[] | undefined;
}): Promise<string | undefined> => {
  console.log(presignedUrls);
  try {
    if (presignedUrls) {
      const uploadPromises = selectedImages.map(async (file, index) => {
        const presignedUrl = presignedUrls[index];

        const fileType = await fetch(file);
        const blob = await fileType.blob();

        const response = await fetch(presignedUrl.presignedUrl, {
          method: 'PUT',
          headers: { 'Content-Type': blob.type },
          body: blob,
        });

        if (!response.ok) {
          throw new Error(`업로드 실패: ${response.statusText}`);
        }
        return presignedUrl.presignedUrl.split('?')[0];
      });
      console.log(uploadPromises);
      const results = await Promise.all(uploadPromises);
      console.log('upload 완료');

      const decodedUrl = results?.map((data) => decodeURIComponent(data));
      console.log('✅ 디코딩된 URL:', decodedUrl);
      const fixedUrl = decodedUrl[0].replace(/\/{2,}/g, '/');
      console.log('✅ 수정된 URL:', fixedUrl);
      return fixedUrl;
    }
  } catch (error) {
    console.log(error);
  }
};
