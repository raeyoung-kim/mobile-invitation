import React, { useState } from 'react';
import Head from 'next/head';
import NavIcon from 'components/NavIcon';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isNavBar, setIsNavBar] = useState(false);
  return (
    <>
      <Head>
        <title>모바일 초대장</title>
        <meta name="description" content="모바일 초대장" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="sticky top-0 px-5 lg:px-0 bg-white h-[70px] border-b border-[#e5e7eb] z-50">
        <div className="max-w-[1200px] h-full m-auto flex items-center justify-between">
          <Link href={'/'}>
            <a>
              <h1 className="font-nanum text-[28px] xs:text-[30px] whitespace-nowrap">
                모바일 초대장
              </h1>
            </a>
          </Link>

          <div className="flex items-center">
            <nav
              className={`whitespace-nowrap px-2 xs:px-5 transition-all ${
                isNavBar
                  ? 'opacity-1 translate-x-[0px]'
                  : 'opacity-0 translate-x-[30px]'
              }`}
            >
              <ul className="flex font-gaegu font-bold text-[14px] lg:text-[16px]">
                <li className="ml-1 xs:ml-5">
                  <Link href="/history">
                    <a>제작내역</a>
                  </Link>
                </li>
                <li className="ml-1 xs:ml-5">
                  <Link href="/login">
                    <a>로그인</a>
                  </Link>
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
