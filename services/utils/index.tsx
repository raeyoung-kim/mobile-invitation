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
    default:
      return '';
  }
};

export const getTime = (time: string): string => {
  const timeArr = time.split(':');
  const result = `${
    Number(timeArr[0]) > 12 ? Number(timeArr[0]) - 12 : Number(timeArr[0])
  }:${timeArr[1]}${Number(timeArr[0]) > 12 ? 'PM' : 'AM'}`;
  return result;
};

export const handleCheckSample = (
  mainPhoto: null | File,
  data: ProductInfo
): boolean => {
  if (!mainPhoto) {
    alert('메인 사진을 선택해 주세요 📸');
    return true;
  }
  if (!data.male.lastName && !data.male.firstName) {
    alert('신랑 성함을 입력해 주세요 :)');
    return true;
  }
  if (!data.female.lastName && !data.female.firstName) {
    alert('신부 성함을 입력해 주세요 :)');
    return true;
  }
  if (!data.weddingDate || !data.weddingTime) {
    alert('예식 일자를 입력해 주세요 :)');
    return true;
  }
  if (!data.weddingAddress || !data.weddingAddressName) {
    alert('예식장 위치와 예식장명을 입력해 주세요 :)');
    return true;
  }
  if (!data.weddingContact) {
    alert('예식장 연락처를 입력해 주세요 :)');
    return true;
  }
  if (!data.greetingMessage) {
    alert('인사말을 입력해 주세요 :)');
    return true;
  }
  return false;
};
