import { useState } from 'react';
import styled from 'styled-components';

export const ImgLayout = ({ ImgUrl }: { ImgUrl: string }) => {
  const [ImgState, setImgState] = useState<string | undefined>(undefined);
  const handleClick = (ImgUrl: string | undefined) => {
    setImgState(ImgUrl);
  };
  console.log(ImgState);
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
