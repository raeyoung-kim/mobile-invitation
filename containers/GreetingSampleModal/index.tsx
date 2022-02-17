import { GreetingSample, ModalLayout } from 'components';
import React from 'react';
import { greetingSample } from './data';
import { BiX } from 'react-icons/bi';

interface Props {
  onClose: () => void;
  onClick: (val: string) => void;
}

const GreetingSampleModal: React.FC<Props> = ({ onClose, onClick }) => {
  return (
    <>
      <ModalLayout onClose={onClose}>
        <div className="relative">
          <div className="px-5 sticky top-0 flex justify-between items-center bg-white py-4 border-b">
            <p className="font-jua text-[14px] xs:text-lg">
              원하시는 인사말을 골라주세요.
            </p>
            <button className="text-[28px]" onClick={onClose}>
              <BiX />
            </button>
          </div>
          <div className="px-5">
            {greetingSample.map((value) => {
              return (
                <div key={value} onClick={() => onClick(value)}>
                  <GreetingSample data={value} />
                </div>
              );
            })}
          </div>
        </div>
      </ModalLayout>
    </>
  );
};

export default GreetingSampleModal;
