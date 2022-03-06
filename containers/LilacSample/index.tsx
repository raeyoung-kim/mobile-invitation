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

const LilacSample: FC<Props> = ({ data }) => {
  return (
    <div className="bg-[#e7e7f5] min-h-screen min-w-[280px] max-w-[480px] mx-auto">
      <div className="pt-8 pb-6 mx-auto">
        <div className="font-thin text-[20px] text-center">
          <span className="border-b border-[#999]">
            {data.weddingDate.slice(0, 4).split('').join(' ')}
          </span>
        </div>
        <p className="font-thin text-[30px] text-center text-bold">
          {data.weddingDate.slice(5, 7)}.{data.weddingDate.slice(8, 10)}
        </p>
      </div>
      <div className="relative w-full">
        <div>
          <img
            alt="메인 이미지"
            src="https://picsum.photos/480/350"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="mx-auto flex justify-around max-w-[200px] py-8 text-2xl font-thin">
        <p>{data.male.lastName + data.male.firstName}</p>
        {'&'}
        <p>{data.female.lastName + data.female.firstName}</p>
      </div>
      <Fade>
        <div className="pt-8 pb-16">
          <Greetings
            data={data.greetingMessage}
            className={'font-thin text-sm'}
          />
        </div>
      </Fade>
      <Fade>
        <p className="text-center font-thin">
          {data.weddingDate.split('-').join('.')} {getWeek(data.weddingDate)}
          요일 {getTime(data.weddingTime)}
        </p>
        <p className="text-center font-thin">{data.weddingAddressName}</p>
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
        {/* 달력 */}
        <Month
          date={data.weddingDate}
          time={data.weddingTime}
          fontFamily={'font-thin'}
        />
      </Fade>
      <Fade>
        {/* 예식 장소 및 지도 */}
        <div className="px-5 pt-32 pb-8">
          <div className="flex justify-center">
            <FaMapMarkerAlt className="text-3xl" />
          </div>
          <p className="py-5 text-center text-lg font-thin">
            {data.weddingAddressName}
          </p>
          <p className="text-center text-xs font-thin">
            {data.DetailWeddingAddress}
          </p>
          <div className="flex items-center justify-center text-xs mt-2">
            <IoMdCall />
            <p className="text-xs font-thin">{data.weddingContact}</p>
          </div>
          <div className="pt-9">
            <Map address={data.weddingAddress} />
          </div>
        </div>
      </Fade>
      <Fade>
        {/* 오시는 길 */}
        <div className="pb-12">
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
      <Fade>
        {/* 드리는 말씀 */}
        <div className="px-5">
          <GreetingSample
            isTitle={true}
            data={data.greetingMessage}
            fontFamily={'font-thin'}
          />
        </div>
      </Fade>
      <Fade>{/* 방명록 */}</Fade>
      <Fade>
        <div className="px-5 py-[100px]">
          <AccountNumbers
            male={data.male}
            female={data.female}
            data={data.accountNumberList}
          />
        </div>
      </Fade>
    </div>
  );
};

export default LilacSample;
