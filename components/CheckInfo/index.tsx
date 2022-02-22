import React, { useState } from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

interface Props {
  title: string;
  children: JSX.Element;
}

const CheckInfo: React.FC<Props> = ({ title, children }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="py-4">
      <div
        onClick={() => setIsChecked(!isChecked)}
        className="flex items-center text-base"
      >
        {isChecked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        <p className="ml-4 font-sanspro font-bold">{title}</p>
      </div>
      {isChecked && <>{children}</>}
    </div>
  );
};

export default CheckInfo;
