import { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import request from 'services/api';
import { useUser } from 'services';
import { HistoryItem, Loading } from 'components';
import Link from 'next/link';
import { GiClick } from 'react-icons/gi';

const HistoryPage: NextPage = () => {
  const { push } = useRouter();
  const token = Cookies.get('refreshToken');

  const { user } = useUser();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ProductInfo[]>([]);

  const load = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await request.get('/sample/user', {
        params: {
          userId: user.id,
        },
      });

      setData(data);
    } catch {
      console.error;
    } finally {
      setIsLoading(false);
    }
  }, [user.id]);

  useEffect(() => {
    !token && push('/login');
  }, [push, token]);

  useEffect(() => {
    user.id && load();
  }, [load, user.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      {data?.length ? (
        <div className="min-h-screen max-w-[1200px] px-5 pb-[120px] w-full md:max-w-[450px] lg:pt-[40px] lg:pb-[280px] lg:px-0">
          {data.map((el) => {
            return (
              <div key={el.id} className="mt-8">
                <HistoryItem
                  data={{
                    id: el.id || '',
                    src: el.mainPhoto,
                  }}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="min-h-screen max-w-[1200px] mx-auto">
          <p className="text-center mt-[calc(100vh/2.5)] font-jua text-lg lg:text-xl">
            제작내역이 없습니다!
          </p>
          <div className="flex justify-center">
            <Link href={'/'}>
              <a className="font-jua flex items-center">
                <span>제작하러 가기</span>
                <GiClick />
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
