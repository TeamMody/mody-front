export interface StyleAnalysisRequest {
  preferredStyles: string[];
  dislikedStyles: string[];
  appealedImage: string[];
}

export interface StyleRecommendation {
  recommendationStyle: string;
  introduction: string;
  styleDirection: string;
  practicalStylingTips: string;
  imageUrl?: string;
}

export interface StyleAnalysisResponse {
  nickname: string;
  styleRecommendations: StyleRecommendation[];
}
