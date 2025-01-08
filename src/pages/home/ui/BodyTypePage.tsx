import styled from 'styled-components';
import IcLogo from '@shared/assets/icon/ic-logo.svg';
import IcBodyTypeSt from '@shared/assets/icon/ic-body-type-st.svg';
import CustomDivider from '@shared/ui/CustomDivider.tsx';
import CustomButton from '@shared/ui/CustomButton.tsx';
import { useNavigate } from 'react-router';

const detail = '이름 님의 체형은 스트레이트형에 가깝습니다. 골격이 상대적으로 근육감이 느껴지는 어깨와 탄탄한 허벅지를 가진 반면, 허리의 굴곡은 크지 않고 엉덩이는 입체감이 적습니다. 목이 길고 쇄골이 눈에 띄지 않으며, 다리 길이가 상체에 비해 약간 짧은 편입니다. 이 체형은 상체와 하체의 균형을 고려한 스타일링이 중요하며, 체형적 장점을 돋보이게 하기 위해 적절한 실루엣 선택이 필요합니다.';

const emphasize = '어깨와 허벅지의 근육감 있는 라인. 이 부분은 피트감이 있는 상의나 슬림 핏 팬츠를 활용해 강조하면 좋습니다. 상체의 볼륨감이 자연스러운 매력을 더해줄 수 있습니다. ';

const supplementation = '허리가 굴곡이 뚜렷하지 않으므로, 시각적으로 허리를 강조할 수 있는 스타일링이 필요합니다. 다리 길이를 더 길어 보이게 연출하는 하이웨스트 디자인을 추천합니다.';

export const BodyTypePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/', { replace: true });
  };

  return (
    <Wrapper>
      <BodyTypeContainer>
        <Logo src={IcLogo} />
        <BodyTypeImage src={IcBodyTypeSt} />
        <BodyType>스트레이트 타입</BodyType>
      </BodyTypeContainer>
      <DescriptionContainer>
        <CustomDivider width="100%" border="0.5px" />
        <Detail>
          {detail}
        </Detail>
        <CustomDivider width="100%" border="0.5px" />
        <Bold>강조할 부분</Bold>
        <Detail>{emphasize}</Detail>
        <CustomDivider width="100%" border="0.5px" />
        <Bold>보완할 부분</Bold>
        <Detail>{supplementation}</Detail>
      </DescriptionContainer>
      <ButtonContainer>
        <CustomButton label="완료" onClick={handleNavigate} active={true} paddingTop="19px" paddingBottom="19px" />
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 440px;
  height: 100vh;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.gray900};
  overflow-y: scroll;
`;

const BodyTypeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  object-fit: cover;
  width: 26.7%;
  margin-top: 39px;
`;

const BodyTypeImage = styled.img`
  object-fit: cover;
  margin-top: 31px;
  margin-bottom: 25px;
`;

const BodyType = styled.p`
  font: ${({ theme }) => theme.fonts.heading_bold_24px};
  color: ${({ theme }) => theme.colors.green500};
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 17px;
  gap: 24px;
`;

const Bold = styled.p`
  font: ${({ theme }) => theme.fonts.heading_medium_20px};
  font-weight: bold;
`;

const Detail = styled.p`
  font: ${({ theme }) => theme.fonts.body_medium_16px};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  margin-bottom: 56px;
`;
