import styled from 'styled-components';

interface BannerProps {
  id: number;
  type: string;
  title: string;
  isFocused?: boolean;
}

const Banner = ({ id, type, title, isFocused }: BannerProps) => {
  return (
    <BannerContainer onClick={() => console.log(id)} style={{ transform: `scale(${isFocused ? 1 : 0.95})` }}>
      <Type>{type}</Type>
      <Title>{title}</Title>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 40vh;
  width: 71vw;
  border: none;
  border-radius: 15px;
  padding: 14px 17px;
  background-color: #00ff99;
  background-repeat: no-repeat;
  background-size: cover;
  gap: 8px;
  scroll-snap-align: center;
  transition: transform 0.3s ease;
`;

const Type = styled.p`
  font: ${({ theme }) => theme.fonts.body_bold_16px};
`;

const Title = styled.p`
  font: ${({ theme }) => theme.fonts.heading_bold_22px};
`;
