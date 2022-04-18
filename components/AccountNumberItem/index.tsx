import classNames from 'classnames';
import classnames from 'classnames';
import { AccountNumberModal } from 'containers';
import React, { FC, useState } from 'react';
import { IoCall, IoMail } from 'react-icons/io5';
interface Props {
  data: {
    target: string;
    name: string;
    number: string;
    accountNumber: AccountNumber;
    isChecked: boolean;
  };
  fontSize?: string;
  fontFamily?: string;
}

const AccountNumberItem: FC<Props> = ({ data, fontSize, fontFamily }) => {
  const [isAccountNumberModal, setIsAccountNumberModal] = useState(false);

  const onAccountNumberModal = () => {
    setIsAccountNumberModal(!isAccountNumberModal);
  };

  return (
    <>
      {data.number ? (
        <div className={'flex justify-center'}>
          <div>
            <div
              className={classnames('text-base mt-9 text-center', {
                'text-sm': fontSize === 'text-sm',
                'font-myeongjo': fontFamily === 'font-myeongjo',
                'font-thin': fontFamily === 'font-thin',
                'font-stylish': fontFamily === 'font-stylish',
              })}
            >
              <span>{data.target}</span> <strong>{data.name}</strong>
            </div>
            {data?.number ? (
              <div
                className={classnames('flex justify-around text-xl mt-4', {
                  'text-sm': fontSize === 'text-sm',
                  'font-myeongjo': fontFamily === 'font-myeongjo',
                  'font-thin': fontFamily === 'font-thin',
                  'font-stylish': fontFamily === 'font-stylish',
                })}
              >
                <a href={`tel:${data.number}`}>
                  <IoCall className="mx-1" />
                </a>
                <a href={`sms:${data.number}`}>
                  <IoMail className="mx-1" />
                </a>
              </div>
            ) : null}

            {data.isChecked && (
              <div className="text-center mt-4">
                <button
                  className={classNames(
                    'bg-black text-white text-xs rounded-lg py-1 px-2',
                    {
                      'font-myeongjo': fontFamily === 'font-myeongjo',
                      'font-thin': fontFamily === 'font-thin',
                      'font-stylish': fontFamily === 'font-stylish',
                    }
                  )}
                  onClick={onAccountNumberModal}
                >
                  계좌번호
                </button>
              </div>
            )}
          </div>
          {isAccountNumberModal && (
            <AccountNumberModal
              onClose={onAccountNumberModal}
              data={data.accountNumber}
            />
          )}
        </div>
      ) : null}
    </>
  );
};

export default AccountNumberItem;
