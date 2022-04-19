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

export const getContvertToEmbeddedURL = (url: string) => {
  const regExp =
    /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
  const match = url.match(regExp);
  const videoId = match ? match[1] || match[2] : undefined;
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
};

export const getD_day = (date: string) => {
  const today = new Date();
  const dday = new Date(date);
  const gap = dday.getTime() - today.getTime();
  const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
  if (result < 0) {
    return `${Math.abs(result)}일 지났습니다.`;
  } else if (result === 0) {
    return '오늘입니다';
  } else if (result > 0) {
    return `${result}일 남았습니다.`;
  }

  return result;
};
