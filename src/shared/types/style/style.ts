export interface StyleAnalysisRequest {
  preferredStyles: string[];
  dislikedStyles: string[];
  appealedImage: string[];
}

export interface StyleAnalysisResponse {
  styleId: number;
  memberId: number;
  nickname: string;
  isLiked: boolean;
  likedCount?: number;
  recommendedStyle: string;
  introduction: string;
  styleDirection: string;
  practicalStylingTips: string;
  imageUrl?: string;
}
