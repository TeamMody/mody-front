import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import { HeaderAction, RecommendationType } from '@shared/types';
import IcLeftArrow from '@icon/ic-left-arrow.svg';
import { useLocation, useNavigate } from 'react-router';
import StyleSurvey from '@home/components/StyleSurvey.tsx';
import CustomButton from '@shared/ui/CustomButton.tsx';
import { useStyleSurveyStore } from '@home/feature/store/useStyleSurveyStore.ts';
import { useCallback, useEffect } from 'react';
import { useMyInfoStore } from '@shared/store/useMyInfoStore.ts';
import { RecommendationLoading } from '@home/components/RecommendationLoading.tsx';
import { Loading } from '@shared/ui/Loading.tsx';
import debounce from 'lodash/debounce';
import { usePostRecommendations } from '@home/feature/hooks/mutate/usePostRecommendations.ts';
import { useGetStyleCategories } from '@home/feature/hooks/query/useGetStyleCategories.ts';

export const StyleSurveyPage = () => {
  const { myInfo } = useMyInfoStore();
  const { resetKeywords } = useStyleSurveyStore();
  const { type } = useLocation().state as { type: RecommendationType };
  const navigate = useNavigate();
  const { mutate, isSuccess, data, isPending } = usePostRecommendations();
  const { data: categories, isPending: isCategoriesPending, isError: isCategoriesError } = useGetStyleCategories();

  useEffect(() => {
    resetKeywords();
  }, [resetKeywords]);

  const leftHeaderAction: HeaderAction = {
    icon: IcLeftArrow, onClick: () => navigate(-1),
  };

  const handleClick = () => {
    mutate(type);
  };

  const debouncedApiRequest = useCallback(debounce(handleClick, 500), [handleClick]);

  useEffect(() => {
    if (myInfo && myInfo.bodyType === null) {
      navigate(-1);
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      navigate('/recommendation-result', { state: { type: type, result: data?.result } });
    }
  }, [isSuccess]);

  if (isPending) {
    return <RecommendationLoading type={type} />;
  }

  if (isCategoriesError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} title={type} />
      {!isCategoriesPending ? <KeywordsContainer>
          <StyleSurvey category="liked" keywords={categories?.result.styleCategories!} />
          <StyleSurvey category="disliked" keywords={categories?.result.styleCategories!} />
          <StyleSurvey category="image" keywords={categories?.result.appealCategories!} />
          <ButtonContainer>
            <CustomButton label="스타일 추천 받기" onClick={debouncedApiRequest} active={true} paddingTop="19px"
                          paddingBottom="19px" />
          </ButtonContainer>
        </KeywordsContainer>
        : <Loading />
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 440px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray900};
`;

const KeywordsContainer = styled.div`;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 16px 20px 0;
  overflow-y: auto;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  position: relative;
  bottom: 0;
`;
