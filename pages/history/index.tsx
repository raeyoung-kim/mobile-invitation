import { NextPage } from 'next';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const HistoryPage: NextPage = () => {
  const { push } = useRouter();
  const token = Cookies.get('refreshToken');

  useEffect(() => {
    !token && push('/login');
  }, [push, token]);

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div>제작 내역 페이지</div>
    </div>
  );
};

export default HistoryPage;
