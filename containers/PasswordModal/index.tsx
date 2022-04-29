import { Input, Portal } from 'components';
import React, { ChangeEvent, FC, useState } from 'react';

interface Props {
  onClose: () => void;
  onSubmit: (password: string) => void;
}

const PasswordModal: FC<Props> = ({ onClose, onSubmit }) => {
  const [data, setData] = useState({
    password: '',
  });

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
        <div className="bg-white max-w-[420px] w-[80%] h-[180px] pt-3 rounded overflow-auto">
          <div className="flex justify-center items-center">
            <div className="text-sm text-center font-stylish p-5">
              <Input
                type={'password'}
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
          </div>

          <button
            onClick={() => onSubmit(data.password)}
            className="mx-auto block m-5 px-3 py-2 bg-gray-400 rounded-lg text-white text-sm"
          >
            확인
          </button>
        </div>
      </div>
    </Portal>
  );
};

export default PasswordModal;
