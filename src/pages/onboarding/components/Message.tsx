import styled from 'styled-components';

interface MessageProps {
  message: string | undefined;
  isvalid: boolean;
}

const Message = ({ message, isvalid }: MessageProps) => {
  return <MessageStyle isvalid={isvalid}>{message}</MessageStyle>;
};

const MessageStyle = styled.div<{ isvalid: boolean }>`
  color: ${({ isvalid, theme }) => (isvalid ? theme.colors.green500 : 'red')};
  font-size: ${({ theme }) => theme.fonts.detail_medium_12px};
  align-self: flex-start;
  height: 2.6vh;
`;

export default Message;
