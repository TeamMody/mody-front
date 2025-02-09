import Keyword from '@home/components/Keyword.tsx';
import styled from 'styled-components';
import React from 'react';
import { useStyleSurveyStore } from '@home/feature/store/useStyleSurveyStore.ts';

interface SurveyProps {
  category: 'liked' | 'disliked' | 'image';
  keywords: string[];
}

enum SurveyType {
  liked = '선호하는 패션 스타일',
  disliked = '싫어하는 패션 스타일',
  image = '보여지고 싶은 이미지',
}

const StyleSurvey: React.FC<SurveyProps> = ({ category, keywords }) => {
  const title = SurveyType[category];
  const { selectedKeywords, addKeyword, removeKeyword } = useStyleSurveyStore();

  const validateMaximum = () => selectedKeywords[category].length >= 3;

  const changeCount = (active: boolean, label: string) => {
    if (active) {
      addKeyword(category, label);
    } else {
      removeKeyword(category, label);
    }
  };

  return (
    <>
      <Section>
        <Title>
          <BoldText>{title}</BoldText>
          <Description>최대 3개 선택 가능</Description>
        </Title>
        <KeywordsWrapper>
          {keywords.map((keyword, index) => (
            <Keyword
              key={index}
              label={keyword}
              validateMaximum={validateMaximum}
              changeCount={(active) => changeCount(active, keyword)}
            />
          ))}
        </KeywordsWrapper>
      </Section>
    </>
  );
};

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
