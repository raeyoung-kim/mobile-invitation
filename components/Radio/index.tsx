import React, { FC } from 'react';
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
} from 'react-icons/md';

interface Props {
  isChecked: boolean;
  text: string;
  onClick: () => void;
}
const Radio: FC<Props> = ({ isChecked, text, onClick }) => {
  return (
    <div className="flex items-center cursor-pointer" onClick={onClick}>
      {isChecked ? (
        <MdOutlineRadioButtonChecked />
      ) : (
        <MdOutlineRadioButtonUnchecked />
      )}
      <p className="ml-2 text-base">{text}</p>
    </div>
  );
};
export default Radio;
