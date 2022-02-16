type Sample = {
  id: number,
  title: string,
};

type BasicInfo = {
  lastName: string,
  firstName: string,
  rank: string,
  fatherName: string,
  isFather: boolean,
  fatherNumber: string,
  motherName: string,
  isMother: boolean,
  motherNumber: string,
};

type AccountNumberInfo = {
  target: string,
  targetBank: string,
  targetAccountNumber: string,
  accountHolder: string,
};

type WayToComeInfo = {
  title: string,
  description: string,
};

type ProductInfo = {
  mainPhoto: '',
  male: BasicInfo,
  female: BasicInfo,
  greetingMessage: string,
  isMonth: boolean,
  isD_day: boolean,
  weddingDate: string,
  weddingTime: string,
  weddingAddress: string,
  weddingAddressName: string,
  DetailWeddingAddress: string,
  weddingContact: string,
  wayToComeTitle: string,
  wayToComeDescription: string,
  noticeTitle: string,
  noticeDescription: string,
  noticeURL: string,
  noticeButtonName: string,
  galleryPictures: string[],
  accountNumberList: AccountNumberInfo[],
  wayToComeList: WayToComeInfo[],
  isGuestBook: boolean,
  videoUrl: string,
  kakaoThumbnail: string,
  kakaoThumbnailTitle: string,
  kakaoThumbnailDescription: string,
  URLThumbnail: string,
  URLThumbnailTitle: string,
  URLThumbnailDescription: string,
};
