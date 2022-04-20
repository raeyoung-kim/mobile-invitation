/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames';
import { ImageSliderModal } from 'containers';
import React, { FC, useState } from 'react';

interface Props {
  data: string[];
}

const ImageGallery: FC<Props> = ({ data }) => {
  const [isMore, setIsMore] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  const onModal = (index?: number) => {
    document.body.classList.toggle('stop-scrolling');
    index !== undefined && setSelectedImgIndex(index);
    setIsModal(!isModal);
  };

  return (
    <>
      {data?.length ? (
        <div>
          <div
            className={classNames('transition-all', {
              'overflow-hidden min-h-[calc(100vw*0.1] max-h-[calc(100vw*0.1]':
                !isMore,
              'w-full': data.length === 1,
              'grid grid-cols-2 gap-1': data.length > 1,
              'h-[calc(100vw)]':
                data.length > 4 && !isMore && window.innerWidth <= 480,
              'h-[480px]':
                data.length > 4 && !isMore && window.innerWidth > 480,
            })}
          >
            {data.map((src, i) => {
              return (
                <div
                  key={i}
                  className={'relative pb-[100%]'}
                  onClick={() => onModal(i)}
                >
                  <img
                    src={src}
                    className={'absolute w-full h-full rounded object-cover'}
                  />
                </div>
              );
            })}
          </div>

          {data?.length > 4 ? (
            <button
              className="block mx-auto my-4 text-xs"
              onClick={() => setIsMore(!isMore)}
            >
              {isMore ? '사진 보기 닫기' : '더 많은 사진 보기 click'}
            </button>
          ) : null}
          {isModal && (
            <ImageSliderModal
              data={data}
              onClose={onModal}
              selectedImgIndex={selectedImgIndex}
            />
          )}
        </div>
      ) : null}
    </>
  );
};

export default ImageGallery;
