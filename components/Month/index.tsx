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

const Month: FC<Props> = ({ isTitle = true, date, time, fontFamily }) => {
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
    <div className="px-12">
      {isTitle ? (
        <div className="py-3 text-[#d69191]">
          <p className="text-center text-2xl">{`${title[1]}월 ${title[2]}일`}</p>
          <p className="text-center">{`${getWeek(date)}요일 ${
            Number(timeArr[0]) > 12 ? '오후' : '오전'
          } ${
            Number(timeArr[0]) > 12 ? Number(timeArr[0]) - 12 : timeArr[0]
          }시 ${timeArr[1]}분`}</p>
        </div>
      ) : null}

      <div
        className={classnames('grid grid-cols-7', {
          'font-myeongjo': fontFamily === 'font-myeongjo',
        })}
      >
        <div className="date text-[#d69191]">SUN</div>
        <div className="date">MON</div>
        <div className="date">TUE</div>
        <div className="date">WEN</div>
        <div className="date">THU</div>
        <div className="date">FRI</div>
        <div className="date">SAT</div>
        {dates?.map((el, i) => {
          return (
            <div
              key={i}
              className={classnames({
                'text-[#d69191]': i % 7 === 0,
              })}
            >
              <p
                className={classnames('date', {
                  ' border border-[#d69191] rounded-[40px] bg-[#d69191] text-white':
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

export default Month;
