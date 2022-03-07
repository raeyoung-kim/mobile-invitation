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
      <p className="font-stylish text-center text-3xl py-8">저희, 결혼합니다</p>
      <div className="relative w-full">
        <div className="px-12">
          <img
            alt="메인 이미지"
            src="https://picsum.photos/480/550"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="mx-auto text-right px-12 py-5 text-xl font-stylish">
        <p>{data.male.lastName + data.male.firstName}</p>
        <p className="text-xs font-stylish">그리고,</p>
        <p>{data.female.lastName + data.female.firstName}</p>
      </div>
      <Fade>
        <div className="pt-8 pb-16">
          <Greetings
            data={data.greetingMessage}
            className={'font-stylish text-sm'}
            male={{
              fatheName: data.male.fatherName,
              motherName: data.male.motherName,
              rank: data.male.rank,
              name: data.male.lastName + data.male.firstName,
            }}
            female={{
              fatheName: data.female.fatherName,
              motherName: data.female.motherName,
              rank: data.female.rank,
              name: data.female.lastName + data.female.firstName,
            }}
          />
        </div>
      </Fade>
      <Fade>
        <p className="text-center font-stylish">
          {data.weddingDate.split('-').join('.')} {getWeek(data.weddingDate)}
          요일 {getTime(data.weddingTime)}
        </p>
        <p className="text-center font-stylish">{data.weddingAddressName}</p>
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
        <div className="flex justify-center">
          <Month
            date={data.weddingDate}
            time={data.weddingTime}
            fontFamily={'font-stylish'}
          />
        </div>
      </Fade>
      <Fade>
        {/* 예식 장소 및 지도 */}
        <div className="px-5 pt-32 pb-8">
          <div className="flex justify-center">
            <FaMapMarkerAlt className="text-3xl" />
          </div>
          <p className="py-5 text-center text-lg font-stylish">
            {data.weddingAddressName}
          </p>
          <p className="text-center text-xs font-stylish">
            {data.DetailWeddingAddress}
          </p>
          <div className="flex items-center justify-center text-xs mt-2">
            <IoMdCall />
            <p className="text-xs font-stylish">{data.weddingContact}</p>
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
            fontFamily={'font-stylish'}
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
