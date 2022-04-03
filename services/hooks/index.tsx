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

export const useData = () => {
  const [data, setData] = useState<ProductInfo>({
    mainPhoto: '',
    male: {
      lastName: '',
      firstName: '',
      targetNumber: '',
      rank: '',
      fatherName: '',
      isFather: true,
      fatherNumber: '',
      motherName: '',
      isMother: true,
      motherNumber: '',
    },
    female: {
      lastName: '',
      firstName: '',
      targetNumber: '',
      rank: '',
      fatherName: '',
      isFather: true,
      fatherNumber: '',
      motherName: '',
      isMother: true,
      motherNumber: '',
    },
    greetingMessage: '',
    isD_day: false,
    weddingDate: '',
    weddingTime: '',
    weddingAddress: '',
    weddingAddressName: '',
    DetailWeddingAddress: '',
    weddingContact: '',
    noticeTitle: '',
    noticeDescription: '',
    noticeURL: '',
    noticeButtonName: '',
    galleryPictures: [],
    accountNumberList: [
      {
        target: '신랑',
        isCheck: true,
        targetBank: '',
        targetAccountNumber: '',
        accountHolder: '',
      },
      {
        target: '신부',
        isCheck: false,
        targetBank: '',
        targetAccountNumber: '',
        accountHolder: '',
      },
      {
        target: '신랑측 아버지',
        isCheck: false,
        targetBank: '',
        targetAccountNumber: '',
        accountHolder: '',
      },
      {
        target: '신랑측 어머니',
        isCheck: false,
        targetBank: '',
        targetAccountNumber: '',
        accountHolder: '',
      },
      {
        target: '신부측 아버지',
        isCheck: false,
        targetBank: '',
        targetAccountNumber: '',
        accountHolder: '',
      },
      {
        target: '신부측 어머니',
        isCheck: false,
        targetBank: '',
        targetAccountNumber: '',
        accountHolder: '',
      },
    ],
    wayToComeList: [
      {
        title: '',
        description: '',
      },
      {
        title: '',
        description: '',
      },
      {
        title: '',
        description: '',
      },
    ],
    isGuestBook: false,
    videoUrl: '',
    kakao: {
      thumbnail: '',
      title: '',
      description: '',
    },
    URL: {
      thumbnail: '',
      title: '',
      description: '',
    },
  });

  return {
    data,
    setData,
  };
};
