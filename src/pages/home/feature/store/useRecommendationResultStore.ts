import { RecommendationResponse } from '@shared/types';
import { create } from 'zustand';

interface UseRecommendationResultState {
  recommendation: RecommendationResponse | null;
  setRecommendation: (recommendation: RecommendationResponse) => void;
  resetRecommendation: () => void;
}

export const useRecommendationResultStore = create<UseRecommendationResultState>((set) => ({
  recommendation: null,
  setRecommendation: (recommendation) => set({ recommendation }),
  resetRecommendation: () => set({ recommendation: null }),
}));
