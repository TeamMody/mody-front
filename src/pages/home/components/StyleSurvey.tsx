import Keyword from '@home/components/Keyword.tsx';
import styled from 'styled-components';
import { StyleKeywordType, ImageKeyword } from '@shared/types'
import React, { useState } from 'react';

interface SurveyProps {
  title: '선호하는 패션 스타일' | '싫어하는 패션 스타일' | '보여지고 싶은 이미지';
  keywords: StyleKeywordType[] | ImageKeyword[];
}

const StyleSurvey: React.FC<SurveyProps> = ({ title, keywords}) => {
  const [count, setCount] = useState(0);

  const validateMaximum = () => {
    console.log(count)
    return count >= 3;
  }

  const changeCount = (active: boolean) => {
    if (active) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <Section>
        <Title>
          <BoldText>{title}</BoldText>
          <Description>최대 3개 선택 가능</Description>
        </Title>
        <KeywordsWrapper>
          {keywords.map((keyword) => (
            <Keyword
              key={keyword.id}
              validateMaximum={validateMaximum}
              changeCount={changeCount}
              {...keyword} />
          ))}
        </KeywordsWrapper>
      </Section>
    </>
  );
}

export default StyleSurvey;

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;

const Description = styled.p`
  font: ${({ theme }) => theme.fonts.detail_medium_12px};
  color: ${({ theme }) => theme.colors.gray300};
`;

const BoldText = styled.p`
  font: ${({ theme }) => theme.fonts.heading_bold_24px};
  text-align: end;
`;

const KeywordsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 11px 16px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
