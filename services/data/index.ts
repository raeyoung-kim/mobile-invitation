export const BASIC_SAMPLE = {
  id: 1,
  title: '프리미엄 스타일',
};

export const WHITE_SAMPLE = {
  id: 2,
  title: '순백 스타일',
};

export const MYENGJO_SAMPLE = {
  id: 3,
  title: '명조 스타일',
};

export const SIMPLE_SAMPLE = {
  id: 4,
  title: '심플 스타일',
};

export const MODERN_SAMPLE = {
  id: 5,
  title: '모던 스타일',
};

export const LILAC_SAMLE = {
  id: 6,
  title: '라일락 스타일',
};

export const MAIN_SAMPLE_LIST = [
  BASIC_SAMPLE,
  WHITE_SAMPLE,
  MYENGJO_SAMPLE,
  SIMPLE_SAMPLE,
  MODERN_SAMPLE,
  LILAC_SAMLE,
];

export const GREETING_SAMPLE: string[] = [
  '각자 서로 다른 길을\n걸어온 저희가 이제 부부의 연으로\n한 길을 걸어가고자 합니다.\n\n항상 처음을 생각하며,\n서로 아껴주고 사랑하며 살겠습니다.\n\n 부디 참석해 주시어 저희의 약속을\n따뜻한 결려로 축복해 주시기 바랍니다.',
  '코로나19 바이러스로 인해\n걱정이 많았지만 종식을 예측할 수 없어\n결혼식을 일정대로 진행하기로 했습니다.\n\n저희를 축하해주시는 마음은 모두 같으니\n참석에 대한 부담감을 갖지 않으시길 바라며\n축하해주신 모든 분들께 감사드립니다.',
  '서로에게 행복을 주는 사람을 만났습니다.\n웃는 모습이 너무나 예쁜 그 사람을 만났습니다.\n배려하는 마음이 따뜻한 그 사람을 만났습니다.\n\n운명처럼 만나게 된 우리의 인연\n그 인연에 이끌려 이제 영원을\n함께 약속하려 합니다.',
  '평생을 같이하고 싶은 사람을 만났습니다.\n\n첫 마음 그대로 존중하고 배려하며\n예쁘게 사랑하겠습니다.',
  '저희 두 사람의 작은 만남이\n사랑의 결실을 이루어\n소중한 결혼식을 올리게 되었습니다.\n\n평생 서로 귀하게 여기며\n첫 마음 그대로 존중하고 배려하며 살겠습니다.\n\n오루지 믿음과 사랑을 약속하는 날\n오셔서 축복해 주시면 더없는 기쁨으로\n간직하겠습니다.',
  '결혼은 또 하나의\n새로운 인생의 시작이라고 합니다.\n\n오늘이 있기까지 많은 사랑과\n관심을 기울여 주신\n여러 어르신과 친지분들을 모시고\n저희 두 사람이 백년해로의\n진실한 기약을 맺고자 합니다.\n\n부디 참석하시어 저희가 내딛는\n새 인생의 첫걸음을\n결려와 축복으로 빛내 주시기 바랍니다.',
  '어제의 너와 내가\n오늘 우리가 되어\n저희 두 사람 이제\n한길을 같이 걷고자 합니다.\n\n저희 첫 디딤에 부디 오시어 따뜻한\n사랑으로 축복해 주십시오.\n\n보다 힘찬 내디딤이 될 것입니다.',
  '새로이 시작하는 작은사랑이\n보다 깊고 향 짙게 꽃피려 합니다.\n\n저희의 뜻깊은 백 년의 약속의 날\n함께 하셔서 축복해 주십시오.\n\n사랑으로 가득 채워\n즐거움은 나누고 어려움은 이겨내는\n함께 나아가는 삶을 꾸리겠습니다.',
  '너무 곱게 키우면 여릴까 봐\n너무 험하게 키우면 거칠까 봐\n노심초사 하루도 편할 날 없이\n정성 들였습니다.\n\n하지만 막상 혼인에 예를 갖춰\n어른들 세상에 내보내려니\n새삼 두려움이 앞섭니다.\n\n살펴주시고 가르쳐 주시고\n가야 할 먼 길 훤히 밝혀 주시기 바랍니다.',
  '저희 아들과 딸이 한 가정을 이루고자\n혼인의 예를 올리게 되었습니다.\n\n 두사람이 행복한 가정을\n이룰 수 있도록 따뜻한 마음으로\n축복해주시면 감사하겠습니다.',
];

export const SAMLE_DATA: ProductInfo = {
  mainPhoto: 'https://picsum.photos/480/65',
  male: {
    lastName: '박',
    firstName: '수찬',
    targetNumber: '010-1234-1234',
    rank: '차남',
    fatherName: '박정식',
    isFather: true,
    fatherNumber: '010-2345-2345',
    motherName: '이영애',
    isMother: true,
    motherNumber: '010-3456-3456',
  },
  female: {
    lastName: '김',
    firstName: '연희',
    targetNumber: '010-4321-4321',
    rank: '차녀',
    fatherName: '김만식',
    isFather: true,
    fatherNumber: '010-3210-3210',
    motherName: '이지연',
    isMother: true,
    motherNumber: '010-5432-5432',
  },
  greetingMessage: GREETING_SAMPLE[0],
  isMonth: false,
  isD_day: false,
  weddingDate: '2022-04-30',
  weddingTime: '14:30',
  weddingAddress: '강남구 선릉로 100길',
  weddingAddressName: '웨딩홀 2층 클래식홀',
  DetailWeddingAddress: '웨딩홀 2층 클래식홀',
  weddingContact: '02-333-3333',
  noticeTitle: '',
  noticeDescription: '',
  noticeURL: '',
  noticeButtonName: '',
  galleryPictures: [''],
  accountNumberList: [
    {
      target: '신랑',
      isCheck: true,
      targetBank: '카카오뱅크',
      targetAccountNumber: '3333-3333-3333',
      accountHolder: '박수찬',
    },
    {
      target: '신부',
      isCheck: true,
      targetBank: '카카오뱅크',
      targetAccountNumber: '3333-3333-3333',
      accountHolder: '김연희',
    },
    {
      target: '신랑측 아버지',
      isCheck: true,
      targetBank: '신한',
      targetAccountNumber: '3333-3333-3333',
      accountHolder: '방정식',
    },
    {
      target: '신랑측 어머니',
      isCheck: false,
      targetBank: '',
      targetAccountNumber: '',
      accountHolder: '',
    },
    {
      target: '신부측 아버지',
      isCheck: true,
      targetBank: '농협',
      targetAccountNumber: '3333-3333-3333',
      accountHolder: '김만식',
    },
    {
      target: '신부측 어머니',
      isCheck: false,
      targetBank: '',
      targetAccountNumber: '',
      accountHolder: '',
    },
  ],
  wayToComeList: [
    {
      title: '지하철',
      description: '선릉역 11번 출구',
    },
    {
      title: '',
      description: '',
    },
    {
      title: '',
      description: '',
    },
  ],
  isGuestBook: false,
  videoUrl: '',
  kakaoThumbnail: '',
  kakaoThumbnailTitle: '',
  kakaoThumbnailDescription: '',
  URLThumbnail: '',
  URLThumbnailTitle: '',
  URLThumbnailDescription: '',
};
