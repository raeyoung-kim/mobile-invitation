import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import request from 'services/api';
import {
  BasicSample,
  LilacSample,
  MyengjoSample,
  SimpleSample,
  WhiteSample,
  ModernSample,
} from 'containers';

const DetailHistoryPage: NextPage = () => {
  const { query } = useRouter();
  const [data, setData] = useState<ProductInfo | null>(null);

  const load = useCallback(async () => {
    try {
      const { data: sample } = await request.get(`sample`, {
        params: {
          id: query.id,
        },
      });
      setData(sample);
    } catch {
      console.error;
    }
  }, [query.id]);

  useEffect(() => {
    query.id && load();
  }, [load, query.id]);

  return (
    <div className="bg-black">
      {data?.sampleId === '1' && <BasicSample data={data} />}
      {data?.sampleId === '2' && <WhiteSample data={data} />}
      {data?.sampleId === '3' && <MyengjoSample data={data} />}
      {data?.sampleId === '4' && <SimpleSample data={data} />}
      {data?.sampleId === '5' && <ModernSample data={data} />}
      {data?.sampleId === '6' && <LilacSample data={data} />}
    </div>
  );
};

export default DetailHistoryPage;
