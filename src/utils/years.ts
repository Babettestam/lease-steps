export const generateYearsList = (startYear: number): number[] => {
  const currentYear = new Date().getFullYear();
  const years = [];

  startYear = startYear || 1980;
  while (startYear <= currentYear) {
    years.push(startYear++);
  }
  return years;
};
