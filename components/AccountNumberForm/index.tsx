import React from 'react';

interface Props {
  target: string;
}

const AccountNumberForm: React.FC<Props> = ({ target }) => {
  return (
    <div className="pt-5 border-t">
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
