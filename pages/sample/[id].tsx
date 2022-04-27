import { SEO } from 'components';
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
import {
  BASIC_SAMLE_DATA,
  LiLAC_SAMLE_DATA,
  MODERN_SAMLE_DATA,
  MYENGJO_SAMLE_DATA,
  SIMPLE_SAMLE_DATA,
  WHITE_SAMLE_DATA,
} from 'services';

const DetailSamplePage: NextPage = () => {
  const { query } = useRouter();

  const [data] = useState<{
    basic: ProductInfo;
    white: ProductInfo;
    myengjo: ProductInfo;
    simple: ProductInfo;
    modern: ProductInfo;
    lilac: ProductInfo;
  }>({
    basic: BASIC_SAMLE_DATA,
    white: WHITE_SAMLE_DATA,
    myengjo: MYENGJO_SAMLE_DATA,
    simple: SIMPLE_SAMLE_DATA,
    modern: MODERN_SAMLE_DATA,
    lilac: LiLAC_SAMLE_DATA,
  });

  const getSEOdata = (id: string) => {
    switch (id) {
      case '1':
        return data.basic;
      case '2':
        return data.white;
      case '3':
        return data.myengjo;
      case '4':
        return data.simple;
      case '5':
        return data.simple;
      case '6':
        return data.lilac;
      default:
        return data.basic;
    }
  };

  return (
    <div className="bg-black">
      <SEO data={getSEOdata(query.id! as string)} />
      {query.id === '1' && <BasicSample data={data.basic} />}
      {query.id === '2' && <WhiteSample data={data.white} />}
      {query.id === '3' && <MyengjoSample data={data.myengjo} />}
      {query.id === '4' && <SimpleSample data={data.simple} />}
      {query.id === '5' && <ModernSample data={data.modern} />}
      {query.id === '6' && <LilacSample data={data.lilac} />}
    </div>
  );
};

export default DetailSamplePage;
