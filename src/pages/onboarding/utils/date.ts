export const currentYear = new Date().getFullYear();

export const generateYearOptions = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const generateMonthOptions = () => Array.from({ length: 12 }, (_, i) => i + 1);

export const generateDayOptions = (year: number, month: number) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => i + 1);
};
