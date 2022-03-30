import { useCallback, useEffect, useState } from 'react';
import request from 'services/api';
import Cookies from 'js-cookie';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { userState } from 'services/store';

export const useUser = () => {
  const token = Cookies.get('refreshToken');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useRecoilState(userState);
  const resetUser = useResetRecoilState(userState);

  const getUser = useCallback(async () => {
    try {
      setIsLoading(true);
      if (token) {
        const { data } = await request.post('/user', {
          token,
        });
        setUser(data);
      }
    } catch (err) {
      console.error(err);
      resetUser();
      Cookies.remove('refreshToken');
    } finally {
      setIsLoading(false);
    }
  }, [resetUser, setUser, token]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return {
    isLoading,
    user,
    setUser,
    resetUser,
  };
};
