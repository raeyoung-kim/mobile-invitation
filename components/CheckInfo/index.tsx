import React, { useState } from 'react';
import { useEffect } from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

interface Props {
  isData?: boolean;
  title: string;
  children?: JSX.Element;
  onChange?: (isChecked: boolean) => void;
}

const CheckInfo: React.FC<Props> = ({ isData, title, children, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    isData && setIsChecked(isData);
  }, [isData]);

  return (
    <div className="py-4 cursor-pointer">
      <div
        onClick={() => {
          setIsChecked(!isChecked);
          onChange && onChange(isChecked);
        }}
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
