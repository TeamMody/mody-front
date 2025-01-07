/*
 * 체형 분석 질문 & 답변 타입
 */
export interface BodyTypeQuestion {
  id: number;
  question: string;
  answers: BodyTypeAnswer[];
}

export interface BodyTypeAnswer {
  id: number;
  answer: string;
}
