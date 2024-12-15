import { FontsTypes } from '../types';

const createFontStyle = (family: string, weight: number, size: number, lineHeight: number) => `
  font-family: "${family}";
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${lineHeight}%;
  letter-spacing: 0%;
`;


export const fonts: FontsTypes = {
  heading_bold_24px: createFontStyle('Pretendard', 700, 24, 140),
  heading_bold_22px: createFontStyle('Pretendard', 700, 22, 140),
  heading_medium_20px: createFontStyle('Pretendard', 500, 20, 140),
  heading_medium_18px: createFontStyle('Pretendard', 500, 18, 140),
  body_bold_16px: createFontStyle('Pretendard', 700, 16, 140),
  body_bold_14px: createFontStyle('Pretendard', 700, 14, 140),
  body_medium_16px: createFontStyle('Pretendard', 500, 16, 140),
  body_medium_14px: createFontStyle('Pretendard', 500, 14, 140),
  detail_medium_12px: createFontStyle('Pretendard', 500, 12, 140),
  button_medium_16px: createFontStyle('Pretendard', 500, 16, 140),
};
