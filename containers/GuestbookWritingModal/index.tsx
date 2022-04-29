import { Input, Portal, Textarea } from 'components';
import React, { ChangeEvent, FC, useState } from 'react';
import request from 'services/api';

interface Props {
  id: string;
  guestBookData?: GuestBook;
  onClose: () => void;
  load?: () => void;
}

const GuestbookWritingModal: FC<Props> = ({
  id,
  guestBookData,
  onClose,
  load,
}) => {
  const [data, setData] = useState(
    guestBookData || {
      id,
      name: '',
      password: '',
      message: '',
    }
  );

  const onClick = async () => {
    try {
      if (guestBookData) {
        if (!data.password) {
          return alert('비밀번호를 입력해 주세요');
        }
        await request.put(`/guestbook/${guestBookData._id}`, data);
      } else {
        await request.post('/guestbook', data);
      }
    } catch {
      console.error;
    } finally {
      if (data.password) {
        load && load();
        onClose();
      }
    }
  };

  return (
    <Portal>
      <div
        className="fixed inset-0 z-[100] bg-black bg-opacity-30 flex justify-center items-center"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div className="bg-white max-w-[420px] w-[80%] h-[280px] pt-5 rounded overflow-auto">
          <div className="flex justify-center items-center">
            <div className="text-sm text-center font-stylish p-5">
              <div className=" grid grid-cols-2 gap-1">
                <Input
                  placeholder="이름"
                  value={data.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setData({
                      ...data,
                      name: e.target.value,
                    });
                  }}
                />
                <Input
                  type="password"
                  placeholder="비밀번호"
                  value={data.password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setData({
                      ...data,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mt-4">
                <Textarea
                  height={100}
                  placeholder=""
                  value={data.message}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                    setData({
                      ...data,
                      message: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <button
            onClick={onClick}
            className="mx-auto block m-1 px-3 py-2 bg-gray-400 rounded-[25px] text-white text-sm"
          >
            작성하기
          </button>
        </div>
      </div>
    </Portal>
  );
};

export default GuestbookWritingModal;
