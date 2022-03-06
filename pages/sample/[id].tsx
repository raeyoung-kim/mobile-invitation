import {
  BasicSample,
  LilacSample,
  MyengjoSample,
  SimpleSample,
  WhiteSample,
  ModernSample,
} from 'containers';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { GREETING_SAMPLE } from 'services';

const DetailSamplePage: NextPage = () => {
  const { query } = useRouter();

  const [data, setData] = useState<ProductInfo>({
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
  });

  return (
    <div className="bg-black">
      {query.id === '1' && <BasicSample data={data} />}
      {query.id === '2' && <WhiteSample data={data} />}
      {query.id === '3' && <MyengjoSample data={data} />}
      {query.id === '4' && <SimpleSample data={data} />}
      {query.id === '5' && <ModernSample data={data} />}
      {query.id === '6' && <LilacSample data={data} />}
    </div>
  );
};

export default DetailSamplePage;
