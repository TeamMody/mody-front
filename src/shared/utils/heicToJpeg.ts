// import heic2any from 'heic2any';
// import { ImgType } from '@pages/post/components/ConvertToWebP';
// 만약 이 코드가 필요가 없으면 추후에 삭제하겠습니다.
// export const HeicToJpeg = async ({ img }: ImgType) => {
//   const heicBlobArray = await heic2any({
//     blob: img,
//     toType: 'image/jpeg',
//     quality: 0.8,
//   });
//   const heicBlob = Array.isArray(heicBlobArray) ? heicBlobArray[0] : heicBlobArray;
//   const file = new File([heicBlob], `${img?.name.split('.')[0]}.jpeg`, {
//     type: heicBlob.type,
//   });
//   return file;
// };
