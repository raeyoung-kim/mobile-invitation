import React from 'react';

interface Props {
  onClose: () => void;
  children: JSX.Element;
}

const ModalLayout: React.FC<Props> = ({ onClose, children }) => {
  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex justify-center items-center bg-[#9797938f] "
    >
      <div className="bg-white w-[85%] h-[60%] lg:w-[50%] lg:h-[50%] overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
