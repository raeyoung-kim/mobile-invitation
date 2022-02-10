import React from 'react';

interface Props {
  isNav: boolean;
  onClick: () => void;
}

const NavIcon: React.FC<Props> = ({ isNav, onClick }) => {
  return (
    <div onClick={onClick} className="w-[20px] h-[25px] cursor-pointer">
      <div className="relative w-full h-full">
        <span
          className={`${
            isNav ? 'rotate-[45deg] top-[10px]' : ''
          } absolute left-0 top-0 w-full h-[2px] bg-black transition-all`}
        ></span>
        <span
          className={`${
            isNav ? 'translate-x-[100%] opacity-0' : ''
          } absolute left-0 top-[10px] w-full h-[2px] bg-black transition-all`}
        ></span>
        <span
          className={`${
            isNav ? 'rotate-[-45deg] top-[10px]' : 'top-[20px]'
          } absolute left-0 w-full h-[2px] bg-black transition-all`}
        ></span>
      </div>
    </div>
  );
};

export default NavIcon;
