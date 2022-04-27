import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import React from 'react';
import {
  BasicSample,
  LilacSample,
  MyengjoSample,
  SimpleSample,
  WhiteSample,
  ModernSample,
} from 'containers';
import { SEO } from 'components';
import { getSampleDetail } from 'pages/api';

const DetailHistoryPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  return (
    <div className="bg-black">
      <SEO data={data} />
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

export const getServerSideProps: GetServerSideProps<{
  data: ProductInfo;
}> = async (context) => {
  const data = await getSampleDetail(context.query.id! as string);

  if (!data) {
    return {
      redirect: {
        destination: `/404`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      data,
    },
  };
};
