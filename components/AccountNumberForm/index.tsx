import classnames from 'classnames';
import { Input } from 'components';
import React, { ChangeEvent } from 'react';

interface Props {
  target: string;
  isCheck: boolean;
  targetBank?: string;
  targetAccountNumber?: string;
  accountHolder?: string;
  onChangeTagetBank?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTagetAccountNumber?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChageAccountHolder?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AccountNumberForm: React.FC<Props> = ({
  target,
  isCheck,
  targetBank,
  targetAccountNumber,
  accountHolder,
  onChangeTagetBank,
  onChangeTagetAccountNumber,
  onChageAccountHolder,
}) => {
  return (
    <div
      className={classnames('pt-5 pb-10 border-t', {
        hidden: !isCheck,
      })}
    >
      <div className="w-full border rounded py-2 px-3">{target}</div>
      <div className="mt-4">
        <Input
          type={'text'}
          placeholder={`은행`}
          value={targetBank}
          onChange={onChangeTagetBank}
        />
      </div>
      <div className="mt-4">
        <Input
          type={'text'}
          placeholder={`계좌번호`}
          value={targetAccountNumber}
          onChange={onChangeTagetAccountNumber}
        />
      </div>
      <div className="mt-4">
        <Input
          type={'text'}
          placeholder={`예금주`}
          value={accountHolder}
          onChange={onChageAccountHolder}
        />
      </div>
    </div>
  );
};

export default AccountNumberForm;
