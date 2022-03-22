import {
  AccountNumbers,
  AddressLocation,
  Greetings,
  GreetingSample,
  ImageGallery,
  Month,
  WayToCome,
} from 'components';
import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import { getTime, getWeek } from 'services';

interface Props {
  data: ProductInfo;
}

const MyengjoSample: FC<Props> = ({ data }) => {
  return (
    <div className="bg-white min-h-screen min-w-[280px] max-w-[480px] mx-auto">
      <div className="relative w-full">
        <div>
          <img
            alt="메인 이미지"
            src={data.mainPhoto}
            className="w-full h-auto"
          />
          <Fade>
            <div className="text-right py-8 px-5 text-2xl font-myeongjo">
              <p>{data.male.lastName + data.male.firstName}</p>
              <p>{data.female.lastName + data.female.firstName}</p>
              <p>결혼합니다</p>
            </div>
            <div className="text-left mt-8 mx-5 pl-2 border-l border-black font-myeongjo text-sm">
              <p>
                {data.weddingDate.split('-').join('.')}{' '}
                {getWeek(data.weddingDate)}
                요일 {getTime(data.weddingTime)}
              </p>
              <p>{data.weddingAddressName}</p>
            </div>
          </Fade>
        </div>
      </div>
      <Fade>
        <div className="pt-28 pb-16">
          <Greetings
            data={data.greetingMessage}
            className={'font-myeongjo text-xs'}
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
        {/* 갤러리 이미지 */}
        <div className="pt-16 pb-32 px-5">
          <ImageGallery data={data.galleryPictures} />
        </div>
      </Fade>
      <Fade>
        {/* 달력 */}
        <div className="px-5">
          <Month.BlackStyle
            date={data.weddingDate}
            time={data.weddingTime}
            fontFamily={'font-myeongjo'}
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
            fontFamily={'font-myeongjo'}
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
                fontFamily={'font-myeongjo'}
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
            fontFamily={'font-myeongjo'}
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
            fontFamily={'font-myeongjo'}
          />
        </div>
      </Fade>
    </div>
  );
};

export default MyengjoSample;
