import React from 'react';
import Head from 'next/head';

const Header = () => {
  return (
    <>
      <Head>
        <title>모바일 초대장</title>
        <meta name="description" content="모바일 초대장" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="sticky top-0 px-5 lg:px-0 bg-white h-[70px] border-b border-[#e5e7eb]">
        <div className="max-w-[1400px] h-full m-auto flex items-center justify-between">
          <h1 className="font-nanum text-[32px] whitespace-nowrap">
            모바일 초대장
          </h1>
          <nav>
            <ul className="flex font-gaegu">
              <li>
                <a>sample</a>
              </li>
              <li className="ml-5">
                <a>제작내역</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
