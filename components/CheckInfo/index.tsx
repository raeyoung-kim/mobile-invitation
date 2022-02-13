import React, { useState } from 'react';

interface Props {
  title: string;
  children: JSX.Element;
}

const CheckInfo: React.FC<Props> = ({ title, children }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="py-4">
      <div className="flex items-center">
        <input
          className="w-[16px] h-[16px]"
          onChange={(e) => setIsChecked(e.target.checked)}
          type={'checkbox'}
        />
        <p className="ml-4 text-base font-sanspro font-bold">{title}</p>
      </div>
      {isChecked && <>{children}</>}
    </div>
  );
};

export default CheckInfo;
