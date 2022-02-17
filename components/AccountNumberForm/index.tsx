import classnames from 'classnames';
import React from 'react';

interface Props {
  target: string;
  isCheck: boolean;
}

const AccountNumberForm: React.FC<Props> = ({ target, isCheck }) => {
  return (
    <div
      className={classnames('pt-5 pb-10 border-t', {
        hidden: !isCheck,
      })}
    >
      <div className="w-full border rounded py-2 px-3">{target}</div>
      <div className="mt-4">
        <input
          className="w-full border rounded py-2 px-3"
          type={'text'}
          placeholder={`은행`}
        />
      </div>
      <div className="mt-4">
        <input
          className="w-full border rounded py-2 px-3"
          type={'text'}
          placeholder={`계좌번호`}
        />
      </div>
      <div className="mt-4">
        <input
          className="w-full border rounded py-2 px-3"
          type={'text'}
          placeholder={`예금주`}
        />
      </div>
    </div>
  );
};

export default AccountNumberForm;
