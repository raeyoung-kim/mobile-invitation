import { Loading, SampleItem } from 'components';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useState } from 'react';
import request from 'services/api';

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Sample[]>([]);

  const load = async () => {
    try {
      setIsLoading(true);
      const { data: sampleMainData } = await request.get('sample/main');
      setData(sampleMainData);
    } catch {
      console.error;
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-[1200px] m-auto px-5 pb-[120px] md:grid md:grid-cols-3 md:gap-4 lg:pt-[40px] lg:pb-[280px] lg:px-0">
      {data.map((sample: Sample) => {
        return (
          <div key={sample.id} className="mt-8">
            <SampleItem data={sample} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
