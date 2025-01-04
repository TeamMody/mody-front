import styled from 'styled-components';

interface SubBannerProps {
  imageUrl?: string;
  id: number;
  title: string;
}

const SubBanner = ({imageUrl, title}: SubBannerProps) => {
  return (
    <Container>
      <SubBannerImage src={imageUrl} />
      <Title>{title}</Title>
    </Container>
  )
}

export default SubBanner;

const Container = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 7px;
  width: 42.8vw;
  height: 20.8vh;
  scroll-snap-align: center;
`;

const SubBannerImage = styled.img`
  width: 100%;
  height: 68%;
  border-radius: 10px;
  border: none;
`;

const Title = styled.p`
  width: 70%;
  font: ${({ theme }) => theme.fonts.body_bold_16px};
`;
