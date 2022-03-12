/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Props {
  data: string[];
}

const SwiperImage: FC<Props> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [imageList] = useState([data[data?.length - 1], ...data, data[0]]);

  const [currentSlide, setCurrentSlide] = useState(1);

  const [touch, setTouch] = useState({
    start: 0,
    move: 0,
    end: 0,
  });

  const [style, setStyle] = useState({
    transform: `translateX(-${currentSlide}00%)`,
    transition: `all 0.4s ease-in-out`,
  });

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
    setStyle({
      transform: `translateX(-${currentSlide + 1}00%)`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
    setStyle({
      transform: `translateX(-${currentSlide - 1}00%)`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  useEffect(() => {
    if (currentSlide === 0) {
      setCurrentSlide(imageList.length - 2);
      setTimeout(function () {
        setStyle({
          transform: `translateX(-${imageList.length - 2}00%)`,
          transition: '0ms',
        });
      }, 500);
    }

    if (currentSlide >= imageList?.length - 1) {
      setCurrentSlide(1);
      setTimeout(() => {
        setStyle({
          transform: `translateX(-${1}00%)`,
          transition: '0ms',
        });
      }, 500);
    }
  }, [currentSlide, imageList.length]);

  useEffect(() => {
    setStyle({
      transform: `translateX(-${1}00%)`,
      transition: '0ms',
    });
  }, [imageList]);

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
            const current = ref.current.clientWidth * currentSlide;
            const result = -current + (e.targetTouches[0].pageX - touch.start);
            setStyle({
              transform: `translate3d(${result}px, 0px, 0px)`,
              transition: '0ms',
            });
          }
        }}
        onTouchEnd={(e) => {
          const end = e.changedTouches[0].pageX;
          if (touch.start > end) {
            nextSlide();
          } else {
            prevSlide();
          }
          setTouch({
            ...touch,
            end,
          });
        }}
      >
        <div ref={ref} style={style} className={`flex`}>
          {imageList?.map((el, i) => {
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
                  'bg-rose-200': i + 1 === currentSlide,
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
