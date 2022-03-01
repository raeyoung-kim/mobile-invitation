import React, { FC } from 'react';
import { CgClose } from 'react-icons/cg';

interface Props {
  onClose: () => void;
  data: AccountNumber;
}

const AccountNumberModal: FC<Props> = ({ onClose, data }) => {
  const onCopy = () => {
    const copiedText = data.targetAccountNumber;

    navigator.clipboard
      .writeText(`${copiedText}`)
      .then(() => {
        alert('계좌가 복사되었습니다.');
      })
      .catch(() => {
        alert('계좌 복사가 실패되었습니다.');
      });
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black bg-opacity-30 flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white max-w-[420px] w-[80%] h-[200px] rounded">
        <button className="ml-auto block text-2xl p-3" onClick={onClose}>
          <CgClose />
        </button>
        <div className="flex justify-center items-center">
          <div className="text-sm text-center">
            <p>{data.targetBank}</p>
            <p>{data.targetAccountNumber}</p>
            <p className="mt-1">예금주: {data.accountHolder}</p>

            <button
              className="bg-black text-white rounded py-1 px-2 mt-6 text-sm"
              onClick={onCopy}
            >
              계좌 복사하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountNumberModal;
