export interface LikeResponse {
  itemId: number;
  liked: boolean;
}


export interface RecommendationRequest {
  preferredStyles: string[];
  dislikedStyles: string[];
  appealedImage: string[];
}

export interface RecommendationResponse {
  memberId: number;
  nickname: string;
  recommendationId: number;
  recommendType: string;
  title: string;
  content: string;
  imageUrl: string;
  liked: boolean;
}

export interface StyleKeywordResponse {
  styleCategories: string[];
  appealCategories: string[];
}
