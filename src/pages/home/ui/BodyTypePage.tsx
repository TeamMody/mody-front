import styled from 'styled-components';
import CustomButton from '@shared/ui/CustomButton.tsx';
import { useNavigate } from 'react-router';
import BodyTypeContent from '@home/components/BodyTypeContent.tsx';
import { bodyTypeResult } from '@shared/apis/home/mocks.ts';

export const BodyTypePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/', { replace: true });
  };

  return (
    <Wrapper>
      <BodyTypeContent {...bodyTypeResult} />
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  margin-bottom: 56px;
`;
