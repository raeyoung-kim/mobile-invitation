import { ShareModal } from 'containers';
import React, { FC, useState } from 'react';
import { BsFillShareFill } from 'react-icons/bs';

interface Props {
  imgUrl: string;
  date: string;
  time: string;
  kakaoTitle?: string;
  kakaoDescription?: string;
}

const Share: FC<Props> = ({
  imgUrl,
  date,
  time,
  kakaoTitle,
  kakaoDescription,
}) => {
  const [isModal, setIsModal] = useState(false);
  const onShareModal = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <div className="relative flex justify-center items-center py-4 border-t">
        <div className="max-w-[1200px] m-auto">
          <p className="font-nanum text-[20px] whitespace-nowrap text-center">
            모바일 청첩장
          </p>
          <p className="mt-2 font-sanspro text-center text-sm">
            Copyrignt ©️ RaeYoung.Kim
          </p>
        </div>
        <div className="absolute right-3">
          <button onClick={onShareModal} className="flex flex-col items-center">
            <BsFillShareFill />
            <p className="text-xs mt-1">공유하기</p>
          </button>
        </div>
      </div>
      {isModal && (
        <ShareModal
          imgUrl={imgUrl}
          date={date}
          time={time}
          onClose={onShareModal}
          kakaoTitle={kakaoTitle}
          kakaoDescription={kakaoDescription}
        />
      )}
    </>
  );
};

export default Share;
