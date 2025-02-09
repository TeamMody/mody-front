import CustomDivider from '@shared/ui/CustomDivider';
import { ToggleButton } from './toggleButton';
import styled from 'styled-components';
import IcZoomIn from '@shared/assets/icon/ic-zoom-in.svg?react';

interface PostBottomProps {
  imgZoom: boolean;
  setImgZoom: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  textStateRef: React.MutableRefObject<string | undefined>;
  setButtonState: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostBottom = ({
  imgZoom,
  setImgZoom,
  handleClose,
  textStateRef,
  setButtonState,
}: PostBottomProps) => {
  const handleImgZoom = () => {
    if (imgZoom) {
      setImgZoom(false);
    } else {
      setImgZoom(true);
    }
  };

  const changeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    textStateRef.current = e.target.value;
  };
  return (
    <>
      <ZoomButton imgZoom={imgZoom} onClick={handleImgZoom}>
        <IcZoomStyle />
      </ZoomButton>
      <TextArea
        defaultValue={textStateRef.current}
        placeholder="게시글을 작성해주세요."
        onChange={(e) => changeTextArea(e)}
      ></TextArea>
      <CustomDivider width="100%" border="1px" />
      <BottomDiv>
        <ToggleButton setButtonState={setButtonState} />
        <SaveStyleButton
          onClick={handleClose}
          disabled={textStateRef === undefined}
          textState={!!textStateRef}
        >
          스타일 저장하기
        </SaveStyleButton>
      </BottomDiv>
    </>
  );
};

const ZoomButton = styled.button<{ imgZoom: boolean }>`
  width: 5.924vh;
  height: 5.924vh;
  margin-left: 1.5vw;
  position: absolute;
  z-index: 10001;
  top: ${({ imgZoom }) => (imgZoom === false ? '46vh' : '50.5vh')};
`;

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
  margin-top: 1.896vh;
`;
const SaveStyleButton = styled.button<{ textState: boolean | undefined }>`
  width: 100%;
  height: 6.635vh;
  font-size: ${({ theme }) => theme.fonts.body_medium_16px};
  background-color: ${({ theme, textState }) =>
    textState === false ? theme.colors.gray500 : theme.colors.green500};
  border-radius: 10px;
  color: black;
`;

const IcZoomStyle = styled(IcZoomIn)`
  &:hover {
    path {
      stroke: ${({ theme }) => theme.colors.green500};
    }
  }
`;

export default PostBottom;
