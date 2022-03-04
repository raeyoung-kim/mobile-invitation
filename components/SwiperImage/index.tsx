/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames';
import React, { FC, useState } from 'react';

interface Props {
  data: string[];
}

const SwiperImage: FC<Props> = ({ data }) => {
  const [isDrag, setIsDrag] = useState(false);
  const [mouseDownClientX, setMouseDownClientX] = useState<number>(0);
  const [mouseUpClientX, setMouseUpClientX] = useState<number>(0);

  const moveRight = (): void => {
    // right ...
  };

  const moveLeft = (): void => {
    // left ..
  };

  const onDragStart = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseDownClientX(e.clientX);
    setIsDrag(true);
  };
  const onDragEnd = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseUpClientX(e.clientX);
    setIsDrag(false);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (isDrag) {
      if (e.pageX > mouseDownClientX) {
        console.log('right');
        moveRight();
      } else {
        console.log('left');
        moveLeft();
      }
    }
  };

  return (
    <>
      <div
        className="relative flex overflow-hidden max-w-[480px] min-w-[280px] w-full h-[calc(100vw*1.1)]"
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onMouseMove={onMouseMove}
      >
        <div className={classNames('flex transition-all')}>
          {data?.map((el, i) => {
            return (
              <img
                key={i}
                src={el}
                className={'w-full h-full border border-black'}
              />
            );
          })}
        </div>
      </div>
      <div className="text-white mt-4">test</div>
    </>
  );
};

export default SwiperImage;
