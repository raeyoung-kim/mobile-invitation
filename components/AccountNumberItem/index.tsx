import classnames from 'classnames';
import React, { FC } from 'react';
import { IoCall, IoMail } from 'react-icons/io5';
interface Props {
  data: {
    target: string;
    name: string;
    number: string;
    accountNumber: AccountNumber;
  };
  fontSize?: string;
}

const AccountNumberItem: FC<Props> = ({ data, fontSize }) => {
  return (
    <div className={'flex justify-center'}>
      <div>
        <div
          className={classnames('text-base font-sanspro mt-9', {
            'text-sm': fontSize === 'text-sm',
          })}
        >
          <span>{data.target}</span> <strong>{data.name}</strong>
        </div>
        <div
          className={classnames('flex justify-around text-xl mt-4', {
            'text-sm': fontSize === 'text-sm',
          })}
        >
          <a href={`tel:${data.number}`}>
            <IoCall />
          </a>
          <a href={`sms:${data.number}`}>
            <IoMail />
          </a>
        </div>
        <div className="text-center mt-4">
          <button className="bg-black text-white text-xs rounded-lg py-1 px-2">
            계좌번호
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountNumberItem;
