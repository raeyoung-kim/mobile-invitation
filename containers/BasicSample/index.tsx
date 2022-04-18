import {
  AccountNumbers,
  AddressLocation,
  Greetings,
  GreetingSample,
  ImageGallery,
  Month,
  WayToCome,
} from 'components';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { getContvertToEmbeddedURL, getTime, getWeek } from 'services';

interface Props {
  data: ProductInfo;
}

const BasicSample: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen min-w-[280px] max-w-[480px] mx-auto">
      <div className="relative w-full">
        <div className="absolute w-full h-[calc(100%+60px)] p-5">
          <div className="w-full h-full border border-[#999]"></div>
        </div>
        <div>
          <img
            alt="메인 이미지"
            src={data.mainPhoto}
            className="w-full h-auto"
          />
          <Fade>
            <div className="mx-auto flex justify-around max-w-[200px] py-8 text-xl font-thin text-bold">
              <p>{data.male.lastName + data.male.firstName}</p>|
              <p>{data.female.lastName + data.female.firstName}</p>
            </div>
            <p className="text-center font-thin text-sm">
              {data.weddingDate.split('-').join('.')}{' '}
              {getWeek(data.weddingDate)}
              요일 {getTime(data.weddingTime)}
            </p>
            <p className="text-center font-thin text-sm">
              {data.weddingAddressName}
            </p>
          </Fade>
        </div>
      </div>
      <Fade>
        <div className="pt-28 pb-16">
          <Greetings
            data={data.greetingMessage}
            className={'font-thin text-sm'}
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
        <div className="py-16 px-5">
          <ImageGallery data={data.galleryPictures} />
        </div>
      </Fade>
      <Fade>
        {/* 달력 */}
        <div className="py-16 px-5 flex justify-center">
          <Month
            date={data.weddingDate}
            time={data.weddingTime}
            fontFamily={'font-thin'}
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
            fontFamily={'font-thin'}
          />
        </div>
      </Fade>
      <Fade>
        {/* 오시는 길 */}
        <div className="pb-32">
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
        <div className="px-5 pb-32">
          <GreetingSample
            isTitle={true}
            data={data.greetingMessage}
            fontFamily={'font-thin'}
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
        <div className="px-5 pt-14 pb-32">
          <AccountNumbers
            male={data.male}
            female={data.female}
            data={data.accountNumberList}
            fontFamily={'font-thin'}
          />
        </div>
      </Fade>
    </div>
  );
};

export default BasicSample;
