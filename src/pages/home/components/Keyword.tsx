import styled from 'styled-components';
import React, { useState } from 'react';

interface KeywordProps {
  label: string;
  validateMaximum: () => boolean;
  changeCount: (active: boolean) => void;
}

const Keyword: React.FC<KeywordProps> = ({ label, validateMaximum, changeCount }) => {
  const [active, setActive] = useState(false);

  const changeActive = () => {
    if (!validateMaximum() || active) {
      setActive(!active);
      changeCount(!active);
    }
  };

  return (
    <KeywordContainer $active={active} onClick={changeActive}>
      {label}
    </KeywordContainer>
  );
};

export default Keyword;

const KeywordContainer = styled.div<{ $active: boolean }>`
  border: 0.5px solid ${({ theme, $active }) => $active ? theme.colors.green500 : 'white'};
  padding: 4px 12px;
  border-radius: 17px;
  font: ${({ theme }) => theme.fonts.body_medium_16px};
  color: ${({ theme, $active }) => $active ? theme.colors.green500 : theme.colors.gray100};
  background-color: ${({ theme, $active }) => $active ? theme.colors.green900 : '#333333'};
`;

