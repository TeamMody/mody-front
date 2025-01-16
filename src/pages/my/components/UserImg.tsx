import styled from 'styled-components';
interface UserImg {
  img: string | undefined;
  width: string;
  height: string;
}
export const UserImg = ({ img, width, height }: UserImg) => {
  return <ProfileImg src={img} $width={width} $height={height}></ProfileImg>;
};

type ProfileImgProps = {
  $width: string;
  $height: string;
};
const ProfileImg = styled.img<ProfileImgProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  border-radius: 50px;
  margin-top: 1.896vh;
  margin-left: 5.128vw;
  aspect-ratio: 1 / 1;
`;
