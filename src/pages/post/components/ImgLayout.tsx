import styled from 'styled-components';
import React from 'react';

export const ImgLayout = ({
  ImgUrl,
  order,
  onClick,
}: {
  ImgUrl: string;
  order: number;
  onClick: () => void;
}) => {
  const [isSelected, setIsSelected] = React.useState(false);
  const handleClick = () => {
    setIsSelected((prev) => !prev);
    onClick();
  };

  return <ImgStyle ImgUrl={ImgUrl} onClick={handleClick} imgState={isSelected} order={order} />;
};

type styleProps = {
  imgState: boolean;
  ImgUrl: string;
  order: number;
};
const ImgStyle = styled.div<styleProps>`
  position: relative;
  width: 24.231vw;
  height: 24.231vw;
  background-image: url(${(props) => props.ImgUrl});
  background-size: cover;
  margin-top: 1px;

  &::after {
    content: ${({ imgState, order }) => (imgState && order ? `"${order}"` : "''")};
    background-color: ${({ imgState }) => (imgState ? 'black  ' : 'transparent')};
    position: absolute;
    width: 24.231vw;
    height: 24.231vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 20px;
    opacity: 0.6;
  }
`;
