import React from 'react';

export const scrollToCenter = (refArray: React.RefObject<(HTMLDivElement | null)[]>, index: number) => {
  if (refArray.current === null) return;
  const element = refArray.current[index];
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
};
