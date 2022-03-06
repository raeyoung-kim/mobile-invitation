import {
  AccountNumbers,
  Greetings,
  GreetingSample,
  ImageGallery,
  Map,
  Month,
  WayToCome,
} from 'components';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { getTime, getWeek } from 'services';

interface Props {
  data: ProductInfo;
}

const BasicSample: React.FC<Props> = ({ data }) => {
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
          <Fade>
            <div className="mx-auto flex justify-around max-w-[200px] py-8 text-xl">
              <p>{data.male.lastName + data.male.firstName}</p>|
              <p>{data.female.lastName + data.female.firstName}</p>
            </div>
            <p className="text-center">
              {data.weddingDate.split('-').join('.')}{' '}
              {getWeek(data.weddingDate)}
              요일 {getTime(data.weddingTime)}
            </p>
            <p className="text-center">{data.weddingAddressName}</p>
          </Fade>
        </div>
      </div>
      <Fade>
        <div className="pt-28 pb-16">
          <Greetings
            data={data.greetingMessage}
            className={'font-sanspro text-sm'}
          />
        </div>
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
        <Month date={data.weddingDate} time={data.weddingTime} />
      </Fade>
      <Fade>
        {/* 예식 장소 및 지도 */}
        <div className="px-5 pt-32 pb-8">
          <div className="flex justify-center">
            <FaMapMarkerAlt className="text-3xl" />
          </div>
          <p className="py-5 text-center text-lg">{data.weddingAddressName}</p>
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
          <GreetingSample isTitle={true} data={data.greetingMessage} />
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

export default BasicSample;
