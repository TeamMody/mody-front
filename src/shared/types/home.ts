/*
 * 체형 분석 질문 & 답변 타입
 */

import React from 'react';

export interface BodyTypeQuestion {
  id: number;
  question: string;
  answers: BodyTypeAnswer[];
}

export interface BodyTypeAnswer {
  id: number;
  answer: string;
  imageUrl?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export type StyleKeywordType = {
  id: number;
  label: string;
};

export type ImageKeyword = {} & StyleKeywordType;

export enum RecommendationType {
  BODY_TYPE = '체형 타입',
  STYLE = '스타일 추천',
  FASHION = '패션 아이템 추천',
}
