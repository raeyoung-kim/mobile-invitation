/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames';
import React, { FC, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Props {
  data: string[];
}

const SwiperImage: FC<Props> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const [touch, setTouch] = useState({
    start: 0,
    move: 0,
    end: 0,
  });

  const nextSlide = () => {
    if (currentSlide >= data?.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(data.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="relative">
      <div
        className="overflow-hidden max-w-[480px] min-w-[280px] w-full bg-black"
        onTouchStart={(e) => {
          setTouch({
            ...touch,
            start: e.touches[0].pageX,
          });
        }}
        onTouchMove={(e) => {
          if (ref?.current) {
            const result =
              currentSlide * ref?.current?.clientWidth +
              (e.targetTouches[0].pageX - touch.start);
            console.log('touch move', result);
          }
        }}
        onTouchEnd={(e) => {
          console.log('touch end', e.changedTouches[0].pageX);
        }}
      >
        <div
          ref={ref}
          style={{
            transform: `translateX(-${currentSlide}00%)`,
            transition: `all 0.4s ease-in-out`,
          }}
          className={`flex`}
        >
          {data?.map((el, i) => {
            return (
              <img
                key={i}
                src={el}
                className={'w-auto h-auto object-contain'}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute w-full flex justify-between top-[50%]">
        <button className="text-white text-xl" onClick={prevSlide}>
          <IoIosArrowBack />
        </button>
        <button className="text-white text-xl" onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </div>
      <div className="text-gray-500 mt-4 text-center flex justify-center">
        {data.map((el, i) => {
          return (
            <div
              key={i}
              className={classNames(
                'bg-gray-200 h-[6px] w-[6px] mr-1 rounded',
                {
                  'bg-rose-200': i === currentSlide,
                }
              )}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SwiperImage;
