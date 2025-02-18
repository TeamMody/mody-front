import IcBodyTypeSt from '@shared/assets/icon/ic-body-type-st.svg';
import IcBodyTypeWave from '@icon/ic-body-type-wave.svg';
import IcBodyTypeNatural from '@icon/ic-body-type-natural.svg';

export interface BodyAnalysisRequest {
  answer: string;
}

export interface FeatureBasedSuggestions {
  emphasize: string;
  enhance: string;
}

export interface BodyTypeAnalysis {
  type: string;
  description: string;
  featureBasedSuggestions: FeatureBasedSuggestions;
}

export interface BodyAnalysisResponse {
  name: string;
  bodyTypeAnalysis: BodyTypeAnalysis;
}

export const BodyImage = <Record<string, string>> {
  '네추럴': IcBodyTypeNatural,
  '스트레이트': IcBodyTypeSt,
  '웨이브': IcBodyTypeWave,
}
