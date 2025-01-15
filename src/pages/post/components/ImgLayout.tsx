import styled from 'styled-components';
import { useImagesStore } from '@pages/post/components/store/ClickImg';
export const ImgLayout = ({ ImgUrl }: { ImgUrl: string }) => {
  const { setImages, setImg } = useImagesStore();
  const handleClick = (ImgUrl: string) => {
    setImg(ImgUrl);
    setImages(ImgUrl);
  };

  return <ImgStyle src={ImgUrl} onClick={() => handleClick(ImgUrl)} />;
};

const ImgStyle = styled.img`
  width: 24.936vw;
  height: 24.936vw;
  &:hover {
    border: 1px solid green;
    opacity: 0.5;
  }
`;
