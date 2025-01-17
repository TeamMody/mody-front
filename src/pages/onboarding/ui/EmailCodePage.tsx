import styled from 'styled-components';
import CheckEmail from '@onboarding/components/CheckEmail';
import { useState } from 'react';
import CheckCode from '@onboarding/components/CheckCode';
import { StateProps } from '@shared/types';

interface EmailCodePageProps extends StateProps<boolean> {}
const EmailCodePage = ({
  value: codeConfirmed,
  setValue: setCodeConfirmed,
}: EmailCodePageProps) => {
  const [codeSent, setCodeSent] = useState<boolean>(false);
  return (
    <Wrapper>
      <CheckEmail value={codeSent} setValue={setCodeSent} />
      {codeSent && <CheckCode value={codeConfirmed} setValue={setCodeConfirmed} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10.6vh auto;
  width: 90%;
  height: 100%;
`;

export default EmailCodePage;
