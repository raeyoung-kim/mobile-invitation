/* eslint-disable jsx-a11y/alt-text */
import { SwiperImage, Portal } from 'components';
import React, { FC } from 'react';

interface Props {
  data: string[];
  selectedImgIndex: number;
  onClose: () => void;
}

const ImageSliderModal: FC<Props> = ({ data, onClose, selectedImgIndex }) => {
  return (
    <Portal>
      <div className="fixed inset-0 bg-black flex justify-center items-center z-[99999]">
        <div className="w-full h-full flex items-center justify-center flex-col">
          <button className="text-white mb-5 p-2" onClick={onClose}>
            닫기
          </button>
          <SwiperImage data={data} initialImgIndex={selectedImgIndex + 1} />
        </div>
      </div>
    </Portal>
  );
};

export default ImageSliderModal;
