import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import request from 'services/api';

const KakaoCallback: NextPage = () => {
  const { query } = useRouter();

  const handleKakaoLogin = useCallback(async () => {
    try {
      const { data } = await request.post('/kakao/login', {
        code: query.code,
      });
      console.log(data);
    } catch {
      console.error();
    }
  }, [query?.code]);

  useEffect(() => {
    query?.code && handleKakaoLogin();
  }, [handleKakaoLogin, query]);

  return <></>;
};

export default KakaoCallback;
