import { DefaultTheme } from "styled-components";
import { ColorsTypes, FontsTypes } from "../types";

const createFontStyle = (family: string, weight: number, size: number, lineHeight: number) => `
  font-family: "${family}";
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${lineHeight}%;
  letter-spacing: 0%;
`;


const fonts: FontsTypes = {
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
}

const colors: ColorsTypes = {
  green900: '#00331f',
  green800: '#00663d',
  green700: '#00995c',
  green600: '#00cc7a',
  green500: '#00ff99',
  green400: '#33ffad',
  green300: '#66ffc2',
  green200: '#99ffd6',
  green100: '#ccffeb',
  gray900: '#000000',
  gray800: '#333333',
  gray700: '#4d4d4d',
  gray600: '#666666',
  gray500: '#808080',
  gray400: '#999999',
  gray300: '#b3b3b3',
  gray200: '#cccccc',
  gray100: '#e6e6e6',
  gray50: '#ffffff',
}

const theme: DefaultTheme = {
  colors,
  fonts,
}

export default theme;
