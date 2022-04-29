import React, { FC, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { BiEditAlt } from 'react-icons/bi';
import request from 'services/api';
import { GuestbookWritingModal, PasswordModal } from 'containers';
import classNames from 'classnames';

interface Props {
  data: GuestBook;
  superUser: boolean;
  fontFamily?: string;
  load: () => void;
}

const GuestMessage: FC<Props> = ({ data, load, superUser, fontFamily }) => {
  const [isModal, setIsModal] = useState({
    edit: false,
    password: false,
  });

  const onDelete = async (password: string) => {
    try {
      const { data: resData } = await request.delete(`/guestbook/${data._id}`, {
        data: {
          password,
          superUser: superUser,
        },
      });
      if (resData.message === 'fail') {
        alert('비밀번호를 다시 입력해주세요 :)');
      } else {
        load();
      }
    } catch {
      console.error;
    } finally {
      setIsModal({
        ...isModal,
        password: false,
      });
    }
  };
  const message = data.message.split('\n');

  return (
    <>
      <div className="bg-white w-full p-2 pb-4 rounded shadow-sm">
        <div className="flex justify-end">
          <button
            className="m-1"
            onClick={() => {
              setIsModal({
                ...isModal,
                edit: true,
              });
            }}
          >
            <BiEditAlt />
          </button>
          <button
            className="m-1"
            onClick={() => {
              if (superUser) {
                if (confirm('방명록을 삭제하시겠습니까?')) {
                  onDelete('');
                }
              } else {
                setIsModal({
                  ...isModal,
                  password: true,
                });
              }
            }}
          >
            <CgClose />
          </button>
        </div>
        <p
          className={classNames('text-sm mx-1 font-bold text-gray-500', {
            'font-myeongjo': fontFamily === 'font-myeongjo',
            'font-thin': fontFamily === 'font-thin',
            'font-stylish': fontFamily === 'font-stylish',
          })}
        >
          {data.name}
        </p>
        {message.map((el, i) => {
          return (
            <p
              key={i}
              className={classNames('text-sm mt-1 mx-1', {
                'font-myeongjo': fontFamily === 'font-myeongjo',
                'font-thin': fontFamily === 'font-thin',
                'font-stylish': fontFamily === 'font-stylish',
              })}
            >
              {el}
            </p>
          );
        })}
      </div>
      {isModal.password && (
        <PasswordModal
          onClose={() => {
            setIsModal({
              ...isModal,
              password: false,
            });
          }}
          onSubmit={onDelete}
        />
      )}
      {isModal.edit && (
        <GuestbookWritingModal
          id={data._id}
          load={load}
          guestBookData={{
            ...data,
            password: '',
          }}
          onClose={() => {
            setIsModal({
              ...isModal,
              edit: false,
            });
          }}
        />
      )}
    </>
  );
};

export default GuestMessage;
