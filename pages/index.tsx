import { SampleItem } from 'components';
import type { NextPage } from 'next';
import { MAIN_SAMPLE_LIST } from 'services/data';

const Home: NextPage = () => {
  return (
    <div className="max-w-[1200px] m-auto px-5 pb-[120px] md:grid md:grid-cols-3 md:gap-4 lg:pt-[40px] lg:pb-[280px] lg:px-0">
      {MAIN_SAMPLE_LIST.map((sample: Sample) => {
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
