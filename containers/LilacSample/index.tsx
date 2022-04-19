import {
  AccountNumbers,
  Greetings,
  Month,
  WayToCome,
  GreetingSample,
  AddressLocation,
  SwiperImage,
} from 'components';
import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import { getContvertToEmbeddedURL, getTime, getWeek } from 'services';

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
            src={data.mainPhoto}
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
              isFather: data.male.isFather,
              motherName: data.male.motherName,
              isMother: data.male.isMother,
              rank: data.male.rank,
              name: data.male.lastName + data.male.firstName,
            }}
            female={{
              fatheName: data.female.fatherName,
              isFather: data.female.isFather,
              motherName: data.female.motherName,
              isMother: data.female.isMother,
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
          <SwiperImage data={data.galleryPictures} />
        </div>
      </Fade>
      <Fade>
        {/* 달력 */}
        <div className="flex justify-center">
          <Month
            isD_day={data.isD_day}
            male={data.male.firstName}
            female={data.female.firstName}
            date={data.weddingDate}
            time={data.weddingTime}
            fontFamily={'font-stylish'}
          />
        </div>
      </Fade>
      <Fade>
        {/* 예식 장소 및 지도 */}
        <div className="px-5 pt-32 pb-8">
          <AddressLocation
            addressName={data.weddingAddressName}
            address={data.weddingAddress}
            detailAddress={data.DetailWeddingAddress}
            contact={data.weddingContact}
            fontFamily={'font-stylish'}
          />
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
                fontFamily={'font-stylish'}
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
        {/* 식전 영상 */}
        {data?.videoUrl ? (
          <iframe
            className="w-full h-80 mt-[100px]"
            src={getContvertToEmbeddedURL(data.videoUrl)}
          />
        ) : null}
      </Fade>
      <Fade>
        <div className="px-5 py-[100px]">
          <AccountNumbers
            male={data.male}
            female={data.female}
            data={data.accountNumberList}
            fontFamily={'font-stylish'}
          />
        </div>
      </Fade>
    </div>
  );
};

export default LilacSample;
