import CustomDivider from '@shared/ui/CustomDivider';
import { ToggleButton } from './toggleButton';
import styled from 'styled-components';
import IcZoomIn from '@shared/assets/icon/ic-zoom-in.svg?react';
import IcZoomOut from '@shared/assets/icon/ic-zoom-out.svg?react';
import { useEffect, useRef, useState } from 'react';

interface PostBottomProps {
  imgZoom: boolean;
  setImgZoom: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  textStateRef: React.MutableRefObject<string | undefined>;
  buttonState: boolean;
  setButtonState: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostBottom = ({
  imgZoom,
  setImgZoom,
  handleClose,
  textStateRef,
  buttonState,
  setButtonState,
}: PostBottomProps) => {
  const handleImgZoom = () => {
    if (imgZoom) {
      setImgZoom(false);
    } else {
      setImgZoom(true);
    }
  };

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [textState, setTextState] = useState(textStateRef.current || '');

  useEffect(() => {
    if (textAreaRef.current) {
      const length = textStateRef.current?.length || 0;
      textAreaRef.current.setSelectionRange(length, length); // 커서를 마지막으로 이동
      textAreaRef.current.focus(); // textarea 포커스 설정
    }
  }, []);

  const changeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextState(e.target.value);
    textStateRef.current = e.target.value;
  };

  return (
    <>
      <ZoomButton $imgZoom={imgZoom} onClick={handleImgZoom}>
        {imgZoom ? <IcZoomOutStyle /> : <IcZoomInStyle />}
      </ZoomButton>
      <TextArea
        ref={textAreaRef}
        value={textState}
        placeholder="게시글을 작성해주세요."
        onChange={changeTextArea}
      ></TextArea>
      <CustomDivider width="100%" border="1px" />
      <BottomDiv>
        <ToggleButton buttonState={buttonState} setButtonState={setButtonState} />
        <SaveStyleButton onClick={handleClose} disabled={!textState} $textState={!!textState}>
          스타일 저장하기
        </SaveStyleButton>
      </BottomDiv>
    </>
  );
};

export default PostBottom;

const TextArea = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fonts.body_medium_16px};
  color: white;
  margin: 5.806vh 0px 0vh 0px;
  padding: 0px 5.128vw 0px 5.128vw;
`;

const BottomDiv = styled.div`
  padding: 0px 5.128vw 0px 5.128vw;
  margin-top: 3.896vh;
`;
const SaveStyleButton = styled.button<{ $textState: boolean | undefined }>`
  width: 100%;
  height: 6.635vh;
  font-size: ${({ theme }) => theme.fonts.body_medium_16px};
  background-color: ${({ theme, $textState }) =>
    $textState === false ? theme.colors.gray500 : theme.colors.green500};
  border-radius: 10px;
  color: black;
`;

const IcZoomInStyle = styled(IcZoomIn)`
  &:hover {
    path {
      stroke: ${({ theme }) => theme.colors.green500};
    }
  }
`;
const IcZoomOutStyle = styled(IcZoomOut)`
  &:hover {
    path {
      stroke: ${({ theme }) => theme.colors.green500};
    }
  }
`;

const ZoomButton = styled.button<{ $imgZoom: boolean }>`
  width: 5.924vh;
  height: 5.924vh;
  margin-left: 1.5vw;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10001;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray800};
  top: ${({ $imgZoom }) => ($imgZoom === false ? '46vh' : '50.5vh')};
`;
