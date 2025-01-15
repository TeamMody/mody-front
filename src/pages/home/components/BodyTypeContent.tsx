import IcLogo from '@icon/ic-logo.svg';
import CustomDivider from '@shared/ui/CustomDivider.tsx';
import styled from 'styled-components';
import React from 'react';

interface BodyTypeContentProps {
  imageUrl: string;
  bodyType: string;
  detail: string;
  emphasize: string;
  supplementation: string;
}

const BodyTypeContent: React.FC<BodyTypeContentProps> = ({ imageUrl, bodyType, detail, emphasize, supplementation }) => {
  return (
    <>
      <BodyTypeContainer>
        <Logo src={IcLogo} />
        <BodyTypeImage src={imageUrl} />
        <BodyType>{bodyType} 타입</BodyType>
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
    </>
  );
}

export default BodyTypeContent;

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
