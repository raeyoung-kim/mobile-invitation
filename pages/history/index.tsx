import { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import request from 'services/api';
import { useUser } from 'services';
import { HistoryItem, Loading } from 'components';

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
    <div className="min-h-screen max-w-[1200px] m-auto px-5 pb-[120px] md:grid md:grid-cols-3 md:gap-4 lg:pt-[40px] lg:pb-[280px] lg:px-0">
      {data.map((el) => {
        return (
          <div key={el.id} className="max-h-52 mt-8">
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
  );
};

export default HistoryPage;
