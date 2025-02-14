import imageCompression from 'browser-image-compression';
import heic2any from 'heic2any';
import { ConvertWebP } from '@pages/post/components/ConvertWebP';
interface ImgType {
  img?: File;
  setSelectedImages?: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ConvertWebP2 = async ({ img, setSelectedImages }: ImgType) => {
  if (img) {
    try {
      const heicBlobArray = await heic2any({
        blob: img,
        toType: 'image/jpeg',
        quality: 0.8,
      });
      const heicBlob = Array.isArray(heicBlobArray) ? heicBlobArray[0] : heicBlobArray;
      const file = new File([heicBlob], `${img?.name.split('.')[0]}.jpeg`, {
        type: heicBlob.type,
      });

      if (file) ConvertWebP({ file, setSelectedImages });
    } catch (error) {
      console.error('변환 오류:', error);
    }
  }
};
