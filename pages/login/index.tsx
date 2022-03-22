import { NextPage } from 'next';
import Image from 'next/image';
import { KaKaoLogin } from 'public/images/assets';
import React from 'react';

const LoginPage: NextPage = () => {
  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div>
        <a
          href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`}
        >
          <Image
            alt="카카오로그인"
            width={200}
            height={50}
            src={KaKaoLogin.src}
          />
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
