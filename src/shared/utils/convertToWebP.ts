import imageCompression from 'browser-image-compression';
export const options = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1024,
  useWebWorker: true,
  fileType: 'image/webp',
};
interface SingleImgType {
  img: File;
}
interface MultipleImgType {
  img: FileList;
}
const convertSingleImgToWebP = async ({ img }: SingleImgType) => {
  // 이미지 최적화를 위해 이미지 압축 및 webP 확장자로 변경
  const webpBlob = await imageCompression(img, options);
  const blobUrl = URL.createObjectURL(webpBlob);
  return blobUrl;
};

const convertMultipleImgToWebP = async ({ img }: MultipleImgType) => {
  const fileEntries = Object.values(img);
  const convertedFiles = await Promise.all(
    fileEntries.map(async (file) => {
      return await convertSingleImgToWebP({ img: file });
    }),
  );
  return convertedFiles;
};

export { convertSingleImgToWebP, convertMultipleImgToWebP };
