import styled from 'styled-components';
import { HeaderAction } from '@shared/types';
import React from 'react';

interface AppBarProps {
  title?: string;
  leftHeaderAction: HeaderAction;
  rightHeaderActionArr?: HeaderAction[];
}

const AppBar = ({ title, leftHeaderAction, rightHeaderActionArr }: AppBarProps) => {
  const { icon, onClick } = leftHeaderAction;

  return (
    <Wrapper>
      {/* 아이콘이 문자열이면 <img>, React 컴포넌트면 그대로 렌더링 */}
      {typeof icon === 'string' ? (
        <img src={icon} onClick={onClick} alt="left-icon" />
      ) : (
        <span onClick={onClick}>{React.createElement(icon)}</span>
      )}

      <p>{title}</p>

      <div>
        {rightHeaderActionArr?.map((action, index) =>
          typeof action.icon === 'string' ? (
            <img key={index} src={action.icon} onClick={action.onClick} alt="right-icon" />
          ) : (
            <span key={index} onClick={action.onClick}>
              {React.createElement(action.icon)}
            </span>
          ),
        )}
      </div>
    </Wrapper>
  );
};

export default AppBar;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100vw;
  max-width: 440px;
  min-height: 7.5vh;
  align-items: center;
  padding: 0 20px;
  background: linear-gradient(to bottom, #121212, #262626);

  img {
    flex-shrink: 0;
  }

  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    text-align: center;
  }

  div {
    display: flex;
    gap: 24px;
  }
`;
