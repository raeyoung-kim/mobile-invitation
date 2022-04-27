import { Portal } from 'components';
import React, { FC } from 'react';
import { CgClose } from 'react-icons/cg';
import { getWeek } from 'services';
import { BsLink45Deg } from 'react-icons/bs';
import { SiKakaotalk } from 'react-icons/si';

interface Props {
  onClose: () => void;
  imgUrl: string;
  date: string;
  time: string;
  kakaoTitle?: string;
  kakaoDescription?: string;
}

declare global {
  interface Window {
    Kakao: any;
  }
}
const ShareModal: FC<Props> = ({
  imgUrl,
  date,
  time,
  kakaoTitle,
  kakaoDescription,
  onClose,
}) => {
  const title = date.split('-');
  const timeArr = time.split(':');
  const onLinkCopy = () => {
    const copiedText = window.location.href;

    navigator.clipboard
      .writeText(`${copiedText}`)
      .then(() => {
        alert('링크가 복사되었습니다.');
      })
      .catch(() => {
        alert('링크 복사가 실패되었습니다. :(');
      });
  };

  const onKakaoShare = () => {
    if (!window?.Kakao?.isInitialized()) {
      window?.Kakao?.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
    }

    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title:
          kakaoTitle ||
          `${title[1]}월 ${title[2]}일 ${getWeek(date)}요일 ${
            Number(timeArr[0]) > 12 ? '오후' : '오전'
          } ${
            Number(timeArr[0]) > 12 ? Number(timeArr[0]) - 12 : timeArr[0]
          }시 ${timeArr[1]}분`,
        description: kakaoDescription || '',
        imageUrl: `${imgUrl}`,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '모바일 청첩장',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
      installTalk: true,
    });
  };

  return (
    <Portal>
      <div
        className="fixed inset-0 z-[100] bg-black bg-opacity-30 flex justify-center items-center"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div className="bg-white max-w-[420px] w-[80%] h-[180px] rounded">
          <button className="ml-auto block text-2xl p-3" onClick={onClose}>
            <CgClose />
          </button>
          <div className="flex justify-center items-center mt-4">
            <button
              className="p-2 flex flex-col items-center"
              onClick={onLinkCopy}
            >
              <BsLink45Deg className="text-4xl" />
              <p className="text-xs mt-1">링크 복사</p>
            </button>
            <button
              className="p-2 flex flex-col items-center"
              onClick={onKakaoShare}
            >
              <SiKakaotalk className="text-4xl" />
              <p className="text-xs mt-1">카카오톡 공유</p>
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default ShareModal;
