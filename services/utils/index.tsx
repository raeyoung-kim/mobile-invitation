export const getRandomString = () => Math.random().toString(36).slice(2);

export const getWeek = (date: string) => {
  const target = new Date(date);
  const day = target.getDay();

  switch (day) {
    case 0:
      return '월';
    case 1:
      return '화';
    case 2:
      return '수';
    case 3:
      return '목';
    case 4:
      return '금';
    case 5:
      return '토';
    case 6:
      return '일';
  }
};
