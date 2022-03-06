import classnames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import { useCallback } from 'react';
import { getWeek } from 'services';

interface Props {
  isTitle?: boolean;
  date: string;
  time: string;
  fontFamily?: string;
}

const BlackStyle: FC<Props> = ({ isTitle = true, date, time, fontFamily }) => {
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
      {isTitle ? (
        <div
          className={classnames('py-2 mb-2 pl-3 border-l border-black', {
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
        className={classnames('grid grid-cols-7', {
          'font-myeongjo': fontFamily === 'font-myeongjo',
          'font-thin': fontFamily === 'font-thin',
        })}
      >
        <div className="date text-[#616060] text-xs">SUN</div>
        <div className="date text-xs">MON</div>
        <div className="date text-xs">TUE</div>
        <div className="date text-xs">WEN</div>
        <div className="date text-xs">THU</div>
        <div className="date text-xs">FRI</div>
        <div className="date text-xs">SAT</div>
        {dates?.map((el, i) => {
          return (
            <div
              key={i}
              className={classnames('date text-xs', {
                'text-[#616060]': i % 7 === 0,
              })}
            >
              <p
                className={classnames('date text-xs', {
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
  );
};

export default BlackStyle;
