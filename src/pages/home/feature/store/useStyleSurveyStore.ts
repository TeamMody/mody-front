import { create } from 'zustand';

interface StyleSurveyState {
  selectedKeywords: {
    liked: string[];
    disliked: string[];
    image: string[];
  };
  addKeyword: (category: keyof StyleSurveyState['selectedKeywords'], keyword: string) => void;
  removeKeyword: (category: keyof StyleSurveyState['selectedKeywords'], keyword: string) => void;
  resetKeywords: () => void;
}

export const useStyleSurveyStore = create<StyleSurveyState>((set) => ({
  selectedKeywords: {
    liked: [],
    disliked: [],
    image: [],
  },
  addKeyword: (category, keyword) =>
    set((state) => ({
      selectedKeywords: {
        ...state.selectedKeywords,
        [category]: [...state.selectedKeywords[category], keyword],
      },
    })),
  removeKeyword: (category, keyword) =>
    set((state) => ({
      selectedKeywords: {
        ...state.selectedKeywords,
        [category]: state.selectedKeywords[category].filter((k) => k !== keyword),
      },
    })),
  resetKeywords: () =>
    set({
      selectedKeywords: {
        liked: [],
        disliked: [],
        image: [],
      },
    }),
}));
