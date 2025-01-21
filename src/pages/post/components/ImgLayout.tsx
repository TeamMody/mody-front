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
  width: 24vw;
  height: 24vw;
  background-image: url(${(props) => props.ImgUrl});
  background-size: cover;
  &::after {
    content: ${({ imgState, order }) => (imgState && order ? `"${order}"` : "''")};
    background-color: ${({ imgState }) => (imgState ? 'black  ' : 'transparent')};
    position: absolute;
    width: 24vw;
    height: 24vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 20px;
    opacity: 0.6;
    border: ${({ imgState, theme }) =>
      imgState && theme ? `1px solid ${theme.colors.green500}` : 'none'};
  }
`;
