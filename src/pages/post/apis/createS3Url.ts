import { presignedUrlProps } from '@pages/post/apis/createPresignedUrl';

export const createS3url = async ({
  selectedImages,
  presignedUrls,
}: {
  selectedImages?: string[];
  presignedUrls: presignedUrlProps[];
}): Promise<string[] | undefined> => {
  try {
    if (presignedUrls && selectedImages) {
      const uploadPromises = selectedImages.map(async (file, index) => {
        const presignedUrl = presignedUrls[index];

        const uploadFile = await fetch(file);
        const blob = await uploadFile.blob();

        const response = await fetch(presignedUrl.presignedUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': blob.type,
          },
          body: blob,
        });

        if (!response.ok) {
          throw new Error(`업로드 실패: ${response.statusText}`);
        }
        return presignedUrl.presignedUrl.split('?')[0];
      });
      const results = await Promise.all(uploadPromises);

      console.log('upload 완료');

      return results;
    }
  } catch (error) {
    console.log(error);
  }
};
