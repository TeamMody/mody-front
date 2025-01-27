export const createS3url = async (
  selectedImages: string[],
  presignedUrls: string[],
): Promise<string[] | undefined> => {
  try {
    if (selectedImages.length !== presignedUrls.length)
      console.log('selectedImages 와 presignedUrl의 길이가 일치하지 않습니다.');
    const uploadPromises = selectedImages.map((file, index) => {
      const presignedUrl = presignedUrls[index];
      return fetch(presignedUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: file,
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`업로드 실패: ${response.statusText}`);
        }
        return presignedUrl.split('?')[0]; // presignedUrl에서 S3 URL 추출
      });
    });
    const results = await Promise.all(uploadPromises);
    console.log('upload 완료');
    return results;
  } catch (error) {
    console.log(error);
  }
};
