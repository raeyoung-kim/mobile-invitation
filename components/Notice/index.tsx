import React, { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  fontFamily?: string;
  data: {
    noticeButtonName: string;
    noticeDescription: string;
    noticeTitle: string;
    noticeURL: string;
  };
}

const Notice: FC<Props> = ({ data, fontFamily = 'font-myeongjo' }) => {
  const result = data.noticeDescription.split('\n');
  return (
    <div className="border border-gray-200 shadow py-6 rounded">
      {data.noticeTitle ? (
        <p
          className={classNames('text-center pb-5 font-bold text-[#d69191]', {
            'font-myeongjo': fontFamily === 'font-myeongjo',
            'font-thin': fontFamily === 'font-thin',
            'font-stylish': fontFamily === 'font-stylish',
          })}
        >
          {data.noticeTitle}
        </p>
      ) : null}
      {data.noticeDescription ? (
        <>
          {result.map((value, i) => {
            return (
              <div key={i} className={'text-center'}>
                <span
                  key={i}
                  className={classNames('text-sm', {
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
        </>
      ) : null}
      {data.noticeURL ? (
        <div className="flex justify-center pt-9">
          <Link href={data.noticeURL}>
            <a className="bg-[#4a4646] mx-auto text-white p-3 rounded-lg text-sm">
              {data.noticeButtonName || '링크 이동하기'}
            </a>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Notice;
