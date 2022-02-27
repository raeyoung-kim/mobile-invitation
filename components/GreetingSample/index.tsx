import React from 'react';

interface Props {
  data: string;
  isTitle?: boolean;
}

const GreetingSample: React.FC<Props> = ({ isTitle, data }) => {
  const result = data.split('\n');

  return (
    <div className="cursor-pointer border border-gray-200 shadow my-5 py-6 rounded">
      {isTitle && (
        <p className="text-center font-sanspro pb-5 font-bold text-[#d69191]">
          드리는 말씀
        </p>
      )}
      {result?.map((value, i) => {
        return (
          <div key={i} className={'text-center'}>
            <span key={i} className={'font-myeongjo text-xs lg:text-[14px]'}>
              {value}
            </span>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default GreetingSample;
