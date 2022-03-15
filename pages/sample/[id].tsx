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
import { SAMLE_DATA } from 'services';

const DetailSamplePage: NextPage = () => {
  const { query } = useRouter();

  const [data] = useState<ProductInfo>(SAMLE_DATA);

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
