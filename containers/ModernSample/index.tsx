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
import { getContvertToEmbeddedURL, getTime, getWeek } from 'services';

interface Props {
  data: ProductInfo;
}

const ModernSample: FC<Props> = ({ data }) => {
  return (
    <div className="bg-white min-h-screen min-w-[280px] max-w-[480px] mx-auto">
      <div className="py-8">
        <div className="mx-auto text-center w-[120px] py-8 px-5 font-myeongjo border border-black">
          <div className="relative">
            <span className="px-1 text-2xl absolute left-0 -mt-2 ml-2">
              {data.weddingDate.split('-')[1]}
            </span>
            <span className="w-[1px] h-[50px] bg-black absolute rotate-[45deg] block left-[50%] right-[50%]"></span>
            <span className="px-1 text-2xl absolute right-0 mt-6 mr-1">
              {data.weddingDate.split('-')[2]}
            </span>
          </div>

          <div className="mt-[80px]">
            <p className="text-sm">
              {data.male.lastName + data.male.firstName}
            </p>
            <p className="text-sm">
              {data.female.lastName + data.female.firstName}
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <div>
          <img
            alt="메인 이미지"
            src={data.mainPhoto}
            className="w-full h-auto"
          />
        </div>
      </div>
      <Fade>
        <div className="mx-auto text-center mt-8 py-4 border-t border-b border-[#999] w-[300px] font-myeongjo text-sm">
          <p>
            {data.weddingDate.split('-').join('.')} {getWeek(data.weddingDate)}
            요일 {getTime(data.weddingTime)}
          </p>
          <p>{data.weddingAddressName}</p>
        </div>
      </Fade>
      <Fade>
        <div className="pt-28 pb-16">
          <Greetings
            data={data.greetingMessage}
            className={'font-myeongjo text-xs'}
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
        {/* 갤러리 이미지 */}
        <div className="pt-16 pb-32 px-5">
          <ImageGallery data={data.galleryPictures} />
        </div>
      </Fade>
      <Fade>
        {/* 달력 */}
        <div className="p-5">
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
            fontFamily={'font-myeongjo'}
          />
        </div>
      </Fade>
    </div>
  );
};

export default ModernSample;
