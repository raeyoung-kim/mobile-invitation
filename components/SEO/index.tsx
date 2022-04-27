import React from 'react';
import Head from 'next/head';
import { getWeek } from 'services';

interface Props {
  data?: ProductInfo | null;
}
const SEO: React.FC<Props> = ({ data }) => {
  const title = data?.weddingDate?.split('-');
  const timeArr = data?.weddingTime?.split(':');

  const result = `${title?.[1]}월 ${title?.[2]}일 ${getWeek(
    data?.weddingDate || ''
  )}요일 ${Number(timeArr?.[0]) > 12 ? '오후' : '오전'} ${
    Number(timeArr?.[0]) > 12 ? Number(timeArr?.[0]) - 12 : timeArr?.[0]
  }시 ${timeArr?.[1]}분`;

  return (
    <>
      <Head>
        <title>모바일 청첩장</title>
        <meta name="description" content="모바일 초대장" />
        <meta
          property="og:image"
          content={data?.URLThumbnail || data?.mainPhoto || ''}
        />
        <meta property="og:title" content={data?.URLTitle || result || ''} />
        <meta property="og:description" content={data?.URLDescription || ''} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default SEO;
