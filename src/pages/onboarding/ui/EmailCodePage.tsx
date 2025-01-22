import styled from 'styled-components';
import CheckEmail from '@onboarding/components/CheckEmail';
import { useEffect, useState } from 'react';
import CheckCode from '@onboarding/components/CheckCode';
import { StateProps } from '@shared/types';

interface EmailCodePageProps extends StateProps<boolean> {}
const EmailCodePage = ({
  value: codeConfirmed,
  setValue: setCodeConfirmed,
}: EmailCodePageProps) => {
  const [codeSent, setCodeSent] = useState<boolean>(false);

  //인증번호 전송 여부 변경 시 인증번호 확인 초기화
  useEffect(() => {
    if (!codeSent) {
      setCodeConfirmed(false);
    }
  }, [codeSent]);
  return (
    <Wrapper>
      {/* 이메일 확인 */}
      <CheckEmail value={codeSent} setValue={setCodeSent} />
      {/* 인증 코드 확인 */}
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
