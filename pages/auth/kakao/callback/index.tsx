import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import request from 'services/api';
import Cookies from 'js-cookie';
import { useUser } from 'services';

const KakaoCallback: NextPage = () => {
  const { query, push } = useRouter();
  const { setUser, resetUser } = useUser();

  const handleKakaoLogin = useCallback(async () => {
    try {
      const { data } = await request.post('/user/login', {
        code: query.code,
      });

      setUser(data);

      Cookies.set('refreshToken', data.token);

      data?.id && push('/');
    } catch {
      console.error;
      Cookies.remove('refreshToken');
      resetUser();
    }
  }, [push, query.code, resetUser, setUser]);

  const handleKakaoLogout = useCallback(() => {
    Cookies.remove('refreshToken');
    resetUser();
    push('/');
  }, [push, resetUser]);

  useEffect(() => {
    query?.code ? handleKakaoLogin() : handleKakaoLogout();
  }, [handleKakaoLogin, handleKakaoLogout, query]);

  return <div className="h-screen" />;
};

export default KakaoCallback;
