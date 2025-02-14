import imageCompression from 'browser-image-compression';
export const options = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1024,
  fileType: 'image/webp',
};
interface ImgType {
  img?: File;
  setSelectedImages: React.Dispatch<React.SetStateAction<string[]>>;
}
export const ConvertWebP = async ({ img, setSelectedImages }: ImgType) => {
  if (img) {
    // 이미지 최적화를 위해 webP 확장자로 변경
    const webpBlob = await imageCompression(img, options);
    const blobUrl2 = URL.createObjectURL(webpBlob);

    setSelectedImages((prev) => {
      return [...prev, blobUrl2];
    });
  }
};
