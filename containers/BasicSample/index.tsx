import { Greetings } from 'components';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { GREETING_SAMPLE } from 'services';

const BasicSample: React.FC = () => {
  return (
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
          <Fade direction="up">
            <div className="mx-auto flex justify-around max-w-[200px] py-8 text-xl">
              <p>박수찬</p>|<p>김연희</p>
            </div>
            <p className="text-center">2022.04.30 SAT 2:30PM</p>
            <p className="text-center">웨딩홀 클래식홀</p>
          </Fade>
        </div>
      </div>
      <Fade direction="up">
        <Greetings
          data={GREETING_SAMPLE[1]}
          className={'font-sanspro text-sm'}
        />
      </Fade>
      <Fade direction="up">{/* 갤러리 이미지 */}</Fade>
      <Fade direction="up">{/* 달력 */}</Fade>
      <Fade direction="up">{/* 예식 장소 및 지도 */}</Fade>
      <Fade direction="up">{/* 오시는 길 */}</Fade>
      <Fade direction="up">{/* 드리는 말씀 */}</Fade>
      <Fade direction="up">{/* 방명록 */}</Fade>
      <Fade direction="up">{/* 마음 전하실 곳 */}</Fade>
    </div>
  );
};

export default BasicSample;
