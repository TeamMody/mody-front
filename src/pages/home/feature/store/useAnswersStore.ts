import { create } from 'zustand';

type QuestionStore = {
  myAnswers: string[];
  setMyAnswer: (index: number, newAnswer: string) => void;
}

export const useAnswersStore = create<QuestionStore>((set) => ({
  myAnswers: [],
  setMyAnswer: (index, newAnswer) => set((state) => {
    const myAnswers = [...state.myAnswers];
    myAnswers[index] = newAnswer;
    return { myAnswers };
  }),
}));
