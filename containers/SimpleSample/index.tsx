import {
  AccountNumbers,
  Greetings,
  Month,
  WayToCome,
  GreetingSample,
  AddressLocation,
  SwiperImage,
  Share,
  Notice,
} from 'components';
import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import { getContvertToEmbeddedURL, getTime, getWeek } from 'services';

interface Props {
  data: ProductInfo;
}

const SimpleSample: FC<Props> = ({ data }) => {
  return (
    <div className="bg-white min-h-screen min-w-[280px] max-w-[480px] mx-auto">
      <div className="pt-8 pb-6 mx-auto">
        <div className="font-thin text-[20px] text-center">
          <span className="border-b border-[#999]">
            {data.weddingDate.slice(0, 4).split('').join(' ')}
          </span>
        </div>
        <div className="font-thin text-[30px] text-center text-bold">
          <span className="border-b border-[#999]">
            {data.weddingDate.slice(5, 7)}.{data.weddingDate.slice(8, 10)}
          </span>
        </div>
        <p className="font-thin text-center text-[20px]">{`${
          data.male.lastName + data.male.firstName
        }·${data.female.lastName + data.female.firstName}`}</p>
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
      <div className="pt-2 pb-8">
        <p className="text-center font-thin text-sm mt-8">
          {data.weddingDate.split('-').join('.')} {getWeek(data.weddingDate)}
          요일 {getTime(data.weddingTime)}
        </p>
        <p className="text-center font-thin text-sm">
          {data.weddingAddressName}
        </p>
      </div>
      <Fade>
        {/* 달력 */}
        <div className="px-5 flex justify-center">
          <Month
            isD_day={data.isD_day}
            male={data.male.firstName}
            female={data.female.firstName}
            isTitle={false}
            date={data.weddingDate}
            time={data.weddingTime}
            fontFamily={'font-thin'}
          />
        </div>
      </Fade>
      <Fade>
        <div className="py-20">
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
        {data.galleryPictures?.length ? (
          <div className="pb-40 px-5">
            <SwiperImage data={data.galleryPictures} />
          </div>
        ) : null}
      </Fade>

      <Fade>
        {/* 예식 장소 및 지도 */}
        <div className="px-5 pb-40">
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
        {data.wayToComeList.filter((el) => el.title !== '')?.length ? (
          <div className="-mt-32 pb-40">
            {data.wayToComeList
              .filter((el) => el.title !== '')
              .map((el, i) => {
                return (
                  <WayToCome
                    key={i}
                    title={el.title}
                    description={el.description}
                  />
                );
              })}
          </div>
        ) : null}
      </Fade>
      <Fade>
        {/* 공지사항 */}
        {data.noticeDescription || data.noticeTitle || data.noticeURL ? (
          <div className="px-5 pb-40">
            <Notice
              fontFamily={'font-thin'}
              data={{
                noticeTitle: data.noticeTitle,
                noticeDescription: data.noticeDescription,
                noticeURL: data.noticeURL,
                noticeButtonName: data.noticeButtonName,
              }}
            />
          </div>
        ) : null}
      </Fade>
      <Fade>
        {/* 드리는 말씀 */}
        <div className="px-5 pb-40">
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
            className="w-full h-80 mb-40"
            src={getContvertToEmbeddedURL(data.videoUrl)}
          />
        ) : null}
      </Fade>
      <Fade>
        <div className="px-5 pb-40">
          <AccountNumbers
            male={data.male}
            female={data.female}
            data={data.accountNumberList}
            fontFamily={'font-thin'}
          />
        </div>
      </Fade>
      <Share
        imgUrl={data.kakaoThumbnail || data.mainPhoto}
        date={data.weddingDate}
        time={data.weddingTime}
      />
    </div>
  );
};

export default SimpleSample;
