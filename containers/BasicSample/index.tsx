import { Greetings, GreetingSample, Map, Month, WayToCome } from 'components';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { GREETING_SAMPLE } from 'services';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';

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
            <p className="text-center">2022.04.30 SUN 2:30PM</p>
            <p className="text-center">웨딩홀 클래식홀</p>
          </Fade>
        </div>
      </div>
      <Fade direction="up">
        <div className="pt-20 pb-16">
          <Greetings
            data={GREETING_SAMPLE[1]}
            className={'font-sanspro text-sm'}
          />
        </div>
      </Fade>
      <Fade direction="up">{/* 갤러리 이미지 */}</Fade>
      <Fade direction="up">
        {/* 달력 */}
        <Month date={'2022-04-30'} time={'14:30'} />
      </Fade>
      <Fade direction="up">
        {/* 예식 장소 및 지도 */}
        <div className="p-11">
          <div className="flex justify-center">
            <FaMapMarkerAlt className="text-3xl" />
          </div>
          <p className="py-5 text-center text-lg">웨딩홀 2층 클래식홀</p>
          <p className="text-center text-xs">강남구 선릉로 100길</p>
          <div className="flex items-center justify-center text-xs mt-2">
            <IoMdCall />
            <p className="text-xs">{'02-333-3333'}</p>
          </div>
          <div className="pt-9">
            <Map address="강남구 선릉로 100길" />
          </div>
        </div>
      </Fade>
      <Fade direction="up">
        {/* 오시는 길 */}
        <div className="pb-9">
          <WayToCome
            title={'버스'}
            description={'영동고교 앞 하차 후 학동사거리 방면 100M내 건물'}
          />
          <WayToCome title={'지하철'} description={'선릉역 11번 출구'} />
        </div>
      </Fade>
      <Fade direction="up">
        {/* 드리는 말씀 */}
        <div className="px-12">
          <GreetingSample isTitle={true} data={GREETING_SAMPLE[1]} />
        </div>
      </Fade>
      <Fade direction="up">{/* 방명록 */}</Fade>
      <Fade direction="up">{/* 마음 전하실 곳 */}</Fade>
    </div>
  );
};

export default BasicSample;
