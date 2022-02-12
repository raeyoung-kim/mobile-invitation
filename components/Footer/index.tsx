import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181616] h-[200px]">
      <div className="max-w-[1200px] m-auto pt-16">
        <p className="font-nanum text-[20px] whitespace-nowrap text-white text-center">
          모바일 초대장
        </p>
        <p className="mt-5 font-sanspro text-center text-[#999999]">
          Copyrignt ©️ RaeYoung.Kim
        </p>
      </div>
    </footer>
  );
};

export default Footer;
