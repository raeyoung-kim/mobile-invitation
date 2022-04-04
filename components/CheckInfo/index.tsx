import React, { useState } from 'react';
import { useEffect } from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

interface Props {
  isData?: boolean;
  title: string;
  children: JSX.Element;
}

const CheckInfo: React.FC<Props> = ({ isData, title, children }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    isData && setIsChecked(isData);
  }, [isData]);

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
