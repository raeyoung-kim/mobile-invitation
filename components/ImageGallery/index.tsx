/* eslint-disable jsx-a11y/alt-text */
import classnames from 'classnames';
import { ImageSliderModal } from 'containers';
import React, { FC, useState } from 'react';

interface Props {
  data: string[];
}

const ImageGallery: FC<Props> = ({ data }) => {
  const [isMore, setIsMore] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const onModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div>
      <div
        className={classnames('grid grid-cols-2 gap-1 transition-all', {
          'overflow-hidden min-h-[280px] h-[calc(100vw*1.1)] max-h-[540px]':
            !isMore,
        })}
      >
        {data.map((src, i) => {
          return (
            <div key={i} className={'relative pb-[100%]'} onClick={onModal}>
              <img
                src={src}
                className={'absolute w-full h-full rounded object-cover'}
              />
            </div>
          );
        })}
      </div>
      <button
        className="block mx-auto my-4 text-xs"
        onClick={() => setIsMore(!isMore)}
      >
        {isMore ? '사진 보기 닫기' : '더 많은 사진 보기 click'}
      </button>
      {isModal && <ImageSliderModal data={data} onClose={onModal} />}
    </div>
  );
};

export default ImageGallery;
