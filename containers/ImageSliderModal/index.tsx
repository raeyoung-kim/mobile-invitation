/* eslint-disable jsx-a11y/alt-text */
import { SwiperImage } from 'components';
import React, { FC } from 'react';

interface Props {
  data: string[];
  onClose: () => void;
}

const ImageSliderModal: FC<Props> = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-[99999]">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <button className="text-white mb-5 p-2" onClick={onClose}>
          닫기
        </button>
        <SwiperImage data={data} />
      </div>
    </div>
  );
};

export default ImageSliderModal;
