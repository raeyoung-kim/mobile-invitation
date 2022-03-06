import {
  AccountNumbers,
  Greetings,
  ImageGallery,
  Month,
  Map,
  WayToCome,
  GreetingSample,
} from 'components';
import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { getTime, getWeek } from 'services';

interface Props {
  data: ProductInfo;
}

const WhiteSample: FC<Props> = ({ data }) => {
  return (
    <div className="bg-white min-h-screen min-w-[280px] max-w-[480px] mx-auto">
      <div className="max-w-[200px] pt-6 px-5">
        <p className="font-nanum text-[40px]">
          {data.weddingDate.slice(5, 7)}/{data.weddingDate.slice(8, 10)}
        </p>
      </div>
      <div className="relative w-full px-5">
        <div>
          <img
            alt="메인 이미지"
            src="https://picsum.photos/480/250"
            className="w-full h-auto"
          />
          <Fade>
            <div className="mx-auto flex justify-around max-w-[200px] py-8 text-2xl font-nanum">
              <p>{data.male.lastName + data.male.firstName}</p>|
              <p>{data.female.lastName + data.female.firstName}</p>
            </div>
          </Fade>
        </div>
      </div>
      <Fade>
        {/* 달력 */}
        <div className="px-5">
          <Month
            isTitle={false}
            date={data.weddingDate}
            time={data.weddingTime}
            fontFamily={'font-myeongjo'}
          />
        </div>
      </Fade>
      <Fade>
        <div className="pt-12">
          <p className="text-center font-nanum text-xl">
            {data.weddingDate.split('-').join('.')} {getWeek(data.weddingDate)}
            요일 {getTime(data.weddingTime)}
          </p>
          <p className="text-center font-nanum text-xl">
            {data.weddingAddressName}
          </p>
        </div>
      </Fade>
      <Fade>
        <div className="pt-10 pb-16">
          <Greetings
            data={data.greetingMessage}
            className={'font-myeongjo text-sm'}
          />
        </div>
      </Fade>
      <Fade>
        <AccountNumbers
          male={data.male}
          female={data.female}
          data={data.accountNumberList}
        />
      </Fade>
      <Fade>
        {/* 갤러리 이미지 */}
        <div className="pt-16 pb-32 px-5">
          <ImageGallery
            data={[
              'https://picsum.photos/480/650',
              'https://picsum.photos/480/650',
              'https://picsum.photos/480/650',
              'https://picsum.photos/480/650',
              'https://picsum.photos/480/650',
              'https://picsum.photos/480/650',
              'https://picsum.photos/480/650',
            ]}
          />
        </div>
      </Fade>
      <Fade>
        {/* 드리는 말씀 */}
        <div className="px-5">
          <GreetingSample isTitle={true} data={data.greetingMessage} />
        </div>
      </Fade>
      <Fade>
        {/* 예식 장소 및 지도 */}
        <div className="px-5 pt-12 pb-8">
          <div className="flex justify-center">
            <FaMapMarkerAlt className="text-3xl" />
          </div>
          <p className="py-5 text-center text-lg">{data.weddingAddressName}</p>
          <p className="text-center text-xs">{data.weddingAddress}</p>
          <p className="text-center text-xs">{data.DetailWeddingAddress}</p>
          <div className="flex items-center justify-center text-xs mt-2">
            <IoMdCall />
            <p className="text-xs">{data.weddingContact}</p>
          </div>
          <div className="pt-9">
            <Map address={data.weddingAddress} />
          </div>
        </div>
      </Fade>
      <Fade>
        {/* 오시는 길 */}
        <div className="pb-[160px]">
          {data.wayToComeList?.map((el, i) => {
            return (
              <WayToCome
                key={i}
                title={el.title}
                description={el.description}
              />
            );
          })}
        </div>
      </Fade>
    </div>
  );
};

export default WhiteSample;
