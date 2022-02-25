import { BasicSample } from 'containers';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const DetailSamplePage: NextPage = () => {
  const { query } = useRouter();
  return <div className="bg-black">{query.id === '1' && <BasicSample />}</div>;
};

export default DetailSamplePage;
