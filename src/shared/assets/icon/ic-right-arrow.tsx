import { useState } from 'react';
import styled from 'styled-components';
export const IcRightArrow = () => {
  return (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="red" xmlns="http://www.w3.org/2000/svg">
      <path
        // onClick={onClick}
        d="M15 7L1 7M15 7L9 13M15 7L9 1"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
