import { NextPage } from 'next';
import React from 'react';

const DetailSamplePage: NextPage = () => {
  return (
    <div className="bg-black">
      <div className="bg-white min-h-screen min-w-[280px] max-w-[480px] mx-auto">
        <div className="relative w-full">
          <div className="absolute w-full h-[calc(100%+60px)] p-5">
            <div className="w-full h-full border border-[#999]"></div>
          </div>
          <div>
            <img
              alt="메인 이미지"
              src="https://picsum.photos/480/650"
              className="w-full h-auto"
            />
            <div className="mx-auto flex justify-around max-w-[200px] py-8 text-xl">
              <p>박수찬</p>|<p>김연희</p>
            </div>
            <p className="text-center">2022.04.30 SAT 2:30PM</p>
            <p className="text-center">웨딩홀 클래식홀</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSamplePage;
