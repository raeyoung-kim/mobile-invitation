import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import { useCallback } from 'react';
import { getD_day, getWeek } from 'services';

interface Props {
  isD_day?: boolean;
  male?: string;
  female?: string;
  isTitle?: boolean;
  date: string;
  time: string;
  fontFamily?: string;
}

const BlackStyle: FC<Props> = ({
  isD_day,
  male,
  female,
  isTitle = true,
  date,
  time,
  fontFamily,
}) => {
  const title = date.split('-');
  const timeArr = time.split(':');
  const [dates, setDates] = useState<null | string[]>(null);

  const getCalender = useCallback(() => {
    const target = new Date(date);
    const firstDay = new Date(target.getFullYear(), target.getMonth(), 1); // 이번달의 첫째날
    const lastDay = new Date(target.getFullYear(), target.getMonth() + 1, 0); // 이번달 마지막날
    const day = firstDay.getDay();

    const result = Array(31);

    for (let i = 0; i < result.length; i++) {
      result[i] = '';
    }

    let count = 1;

    for (let i = day; i < lastDay.getDate() + day; i++) {
      result[i] = `${count}`;
      count++;
    }
    setDates(result);
  }, [date]);

  useEffect(() => {
    getCalender();
  }, [getCalender]);

  return (
    <div>
      <div>
        {isTitle ? (
          <div
            className={classNames('ml-4 py-2 mb-2 pl-3 border-l border-black', {
              'font-myeongjo': fontFamily === 'font-myeongjo',
              'font-thin': fontFamily === 'font-thin',
            })}
          >
            <p className="text-left text-sm">{`${title[1]}월 ${title[2]}일`}</p>
            <p className="text-left text-xs">{`${getWeek(date)}요일 ${
              Number(timeArr[0]) > 12 ? '오후' : '오전'
            } ${
              Number(timeArr[0]) > 12 ? Number(timeArr[0]) - 12 : timeArr[0]
            }시 ${timeArr[1]}분`}</p>
          </div>
        ) : null}

        <div
          className={classNames('grid grid-cols-7', {
            'font-myeongjo': fontFamily === 'font-myeongjo',
            'font-thin': fontFamily === 'font-thin',
          })}
        >
          <div className="date text-[#616060] text-xs w-full">SUN</div>
          <div className="date text-xs w-full">MON</div>
          <div className="date text-xs w-full">TUE</div>
          <div className="date text-xs w-full">WEN</div>
          <div className="date text-xs w-full">THU</div>
          <div className="date text-xs w-full">FRI</div>
          <div className="date text-xs w-full">SAT</div>
          {dates?.map((el, i) => {
            return (
              <div
                key={i}
                className={classNames('date text-xs w-full', {
                  'text-[#616060]': i % 7 === 0,
                })}
              >
                <p
                  className={classNames('date text-xs', {
                    'border border-[#1d1c1c] rounded-[40px] bg-[#1d1c1c] text-white':
                      el === title[2],
                  })}
                >
                  {el}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {isD_day && (
        <p
          className={classNames('text-center mt-7 text-sm', {
            'font-myeongjo': fontFamily === 'font-myeongjo',
            'font-thin': fontFamily === 'font-thin',
            'font-stylish': fontFamily === 'font-stylish',
          })}
        >
          {male || ''} ♥ {female || ''} 결혼식이 {getD_day(date)}
        </p>
      )}
    </div>
  );
};

export default BlackStyle;
