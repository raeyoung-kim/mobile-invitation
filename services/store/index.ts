import { atom } from 'recoil';

export const userState = atom<User>({
  key: 'userState',
  default: {
    id: 0,
    name: '',
    image: '',
  },
});
