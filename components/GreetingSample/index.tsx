import classNames from 'classnames';
import React from 'react';

interface Props {
  data: string;
  isTitle?: boolean;
  fontFamily?: string;
}

const GreetingSample: React.FC<Props> = ({
  isTitle,
  data,
  fontFamily = 'font-myeongjo',
}) => {
  const result = data.split('\n');

  return (
    <div className="cursor-pointer border border-gray-200 shadow my-5 py-6 rounded">
      {isTitle && (
        <p
          className={classNames('text-center pb-5 font-bold text-[#d69191]', {
            'font-myeongjo': fontFamily === 'font-myeongjo',
            'font-thin': fontFamily === 'font-thin',
            'font-stylish': fontFamily === 'font-stylish',
          })}
        >
          드리는 말씀
        </p>
      )}
      {result?.map((value, i) => {
        return (
          <div key={i} className={'text-center'}>
            <span
              key={i}
              className={classNames('text-xs lg:text-[14px]', {
                'font-myeongjo': fontFamily === 'font-myeongjo',
                'font-thin': fontFamily === 'font-thin',
                'font-stylish': fontFamily === 'font-stylish',
              })}
            >
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
