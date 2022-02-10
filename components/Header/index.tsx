import React, { useState } from 'react';
import Head from 'next/head';
import NavIcon from 'components/NavIcon';

const Header: React.FC = () => {
  const [isNavBar, setIsNavBar] = useState(false);
  return (
    <>
      <Head>
        <title>모바일 초대장</title>
        <meta name="description" content="모바일 초대장" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="sticky top-0 px-5 lg:px-0 bg-white h-[70px] border-b border-[#e5e7eb]">
        <div className="max-w-[1400px] h-full m-auto flex items-center justify-between">
          <h1 className="font-nanum text-[30px] whitespace-nowrap">
            모바일 초대장
          </h1>

          <div className="flex">
            <nav
              className={`whitespace-nowrap px-5 transition-all ${
                isNavBar
                  ? 'opacity-1 translate-x-[0px]'
                  : 'opacity-0 translate-x-[30px]'
              }`}
            >
              <ul className="flex font-gaegu text-[12px] lg:text-[16px]">
                <li>
                  <a>sample</a>
                </li>
                <li className="ml-5">
                  <a>제작내역</a>
                </li>
                <li className="ml-5">
                  <a>로그인</a>
                </li>
              </ul>
            </nav>

            <NavIcon
              isNav={isNavBar}
              onClick={() => {
                setIsNavBar(!isNavBar);
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
