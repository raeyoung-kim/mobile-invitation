/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Props {
  data: string[];
}

const SwiperImage: FC<Props> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide >= data?.length) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(data.length);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="relative">
      <div className="overflow-hidden max-w-[480px] min-w-[280px] w-full h-[calc(100vw*1.1)]">
        <div
          ref={ref}
          style={{
            transform: `translateX(-${currentSlide}00%)`,
            transition: `all 0.4s ease-in-out`,
          }}
          className={`flex transition-all`}
        >
          {data?.map((el, i) => {
            return <img key={i} src={el} className={'w-full h-full'} />;
          })}
        </div>
      </div>
      <div className="absolute w-full flex justify-between top-[45%]">
        <button className="text-white" onClick={prevSlide}>
          <IoIosArrowBack />
        </button>
        <button className="text-white" onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </div>
      <div className="text-white mt-4 text-center">{currentSlide}</div>
    </div>
  );
};

export default SwiperImage;
