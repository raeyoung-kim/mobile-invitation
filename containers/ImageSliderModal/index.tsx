/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react';

interface Props {
  onClose: () => void;
}

const ImageSliderModal: FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <button className="text-white mb-5 p-2" onClick={onClose}>
          닫기
        </button>
        <div className="max-w-[480px] min-w-[280px] w-full min-h-[280px] h-[calc(100vw*1.1)] max-h-[540px] bg-gray-200">
          <img src="" className="w-full h-full" />
        </div>
        <div className="text-white mt-4">test</div>
      </div>
    </div>
  );
};

export default ImageSliderModal;
