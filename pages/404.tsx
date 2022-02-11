import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div>
      <div className="w-full h-[80vh] flex justify-center items-center">
        <div className="flex items-center flex-col">
          <div className="spaceship" />
          <a
            className="mt-[10px] text-[4px]"
            href="https://www.freepik.com/vectors/balloon"
          >
            Balloon vector created by freepik - www.freepik.com
          </a>
          <p className="mt-2 font-gaegu text-base sm:text-2xl">
            이런 :( 사용할 수 없는 페이지입니다
          </p>
          <div className="mt-4">
            <Link href="/" passHref>
              <a className="block font-gaegu text-[20px] rounded-lg m-auto p-2 bg-black text-white text-center">
                홈으로 돌아가기
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
