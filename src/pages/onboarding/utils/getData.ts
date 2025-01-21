const nowYear = new Date().getFullYear();
export const years = Array.from({ length: 100 }, (_, i) => nowYear - i).sort();
export const months = Array.from({ length: 12 }, (_, i) => i + 1);
export const heights = Array.from({ length: 100 }, (_, i) => i + 120);

export function getDays(month: number) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return Array.from({ length: days[month - 1] }, (_, i) => i + 1);
}
