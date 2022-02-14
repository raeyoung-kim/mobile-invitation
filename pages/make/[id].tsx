import { CheckInfo, InputTextarea, TargetInfo } from 'components';
import { GreetingSampleModal } from 'containers';
import { NextPage } from 'next';
import React, { useState } from 'react';

const MakeSamplePage: NextPage = () => {
  const [modal, setModal] = useState({
    isGreetingSample: false,
  });

  const onGreetingModal = () => {
    setModal({
      ...modal,
      isGreetingSample: !modal.isGreetingSample,
    });
  };

  return (
    <div className="max-w-[1200px] m-auto px-5 pb-[120px] lg:pt-[40px] lg:pb-[280px] lg:px-0">
      {/* 메인사진 */}
      <section className="mt-10">
        <strong className="font-jua text-[19px]">
          메인사진을 선택해주세요 📸
        </strong>
        <p className="font-sanspro text-gray-500 text-xs">
          가로, 세로에 상관 없이 추가 가능합니다.
        </p>
        <div className="cursor-pointer border-dashed text-[40px] w-[200px] h-[200px] border border-gray-200 mt-5 flex items-center justify-center font-jua text-gray-300">
          +
        </div>
      </section>

      {/* 신랑측 정보 */}
      <section className="mt-10 lg:w-[40%]">
        <TargetInfo target={'신랑'} />
      </section>

      {/* 신부측 정보 */}
      <section className="mt-10 lg:w-[40%]">
        <TargetInfo target={'신부'} />
      </section>

      {/* 인사말 정보 */}
      <section className="mt-10">
        <strong className="font-jua text-[19px]">인사말을 알려주세요 📝</strong>
        <p className="font-sanspro text-gray-500 text-xs">
          원하시는 인사말으로 직접 추가도 가능합니다.
        </p>
        <div className="mt-4">
          <textarea
            className="w-full lg:w-[40%] min-h-[200px] max-h-[200px] border rounded py-2 px-3"
            placeholder={'인사말'}
          />
        </div>
        <div className="mt-4">
          <button
            onClick={onGreetingModal}
            className="bg-black text-white text-center p-3 shadow rounded-md"
          >
            샘플 인사말 보기
          </button>
          {modal.isGreetingSample && (
            <GreetingSampleModal
              onClose={onGreetingModal}
              onClick={() => {
                console.log('샘플 선택');
              }}
            />
          )}
        </div>
      </section>

      {/* 예식장 위치, 예식일자 정보 */}
      <section className="mt-10 lg:w-[40%]">
        <strong className="font-jua text-[19px]">
          예식장 위치와 <br /> 예식일자를 알려주세요 🗓
        </strong>
        <div className="mt-4">
          <p className="font-sanspro text-gray-500 text-xs">예식 일자</p>
          <div className="mt-4">
            <input className="border rounded py-2 px-3 mr-4" type={'month'} />
            <input
              className="mt-3 lg:mt-0 border rounded py-2 px-3"
              type={'time'}
            />
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <div className="flex items-center">
            <input type={'checkbox'} />
            <p className="ml-2 font-sanspro text-gray-500 text-xs">달력 표시</p>
          </div>
          <div className="flex items-center ml-4">
            <input type={'checkbox'} />
            <p className="ml-2 font-sanspro text-gray-500 text-xs">
              디데이 표시
            </p>
          </div>
        </div>
        <div className="mt-4">
          <input
            className="w-full border rounded py-2 px-3"
            type={'text'}
            placeholder={`예식장 주소`}
          />
        </div>
        <div className="mt-4">
          <input
            className="w-full border rounded py-2 px-3"
            type={'text'}
            placeholder={`예식장 명`}
          />
        </div>
        <div className="mt-4">
          <input
            className="w-full border rounded py-2 px-3"
            type={'text'}
            placeholder={`예식장 층과 홀`}
          />
        </div>
        <div className="mt-4">
          <input
            className="w-full border rounded py-2 px-3"
            type={'tel'}
            placeholder={`예식장 연락처`}
          />
        </div>
      </section>

      <section className=" mt-6 lg:w-[40%]">
        <CheckInfo title={'오시는길 🚶 🏃'}>
          <div>
            {[...Array(3)].map((el, i) => {
              return <InputTextarea key={i} inputValue="" TextareaValue="" />;
            })}
          </div>
        </CheckInfo>
        <CheckInfo title={'공지사항 📃'}>
          <>
            <p className="mt-2 font-sanspro text-gray-500 text-xs">
              코로나 안내, 전세버스 안내, 라이브 안내 등 필요하신 공지사항을
              추가하실 수 있습니다.
              <br /> (링크를 추가하시면 공지사항 아래에 버튼이 생성됩니다)
            </p>
            <InputTextarea inputValue="" TextareaValue="" />
            <p className="mt-4 font-sanspro text-gray-500 text-xs">
              (선택) 링크를 추가하시면 공지사항 아래에 링크로 이동가능한 버튼이
              생성됩니다.
              <br /> (예. https://www.youtube.com)
            </p>
            <div className="mt-4">
              <input
                className="w-full border rounded py-2 px-3"
                type={'text'}
              />
            </div>{' '}
            <div className="mt-4">
              <input
                className="w-full border rounded py-2 px-3"
                type={'text'}
              />
            </div>
          </>
        </CheckInfo>
        <CheckInfo title={'갤러리 사진 🖼'}>
          <div>test</div>
        </CheckInfo>
        <CheckInfo title={'계좌번호 🎀'}>
          <div>test</div>
        </CheckInfo>
        <CheckInfo title={'방명록 📖'}>
          <div>test</div>
        </CheckInfo>
        <CheckInfo title={'식전 영상 📽'}>
          <div>test</div>
        </CheckInfo>
        <CheckInfo title={'카카오톡 공유 시'}>
          <div>test</div>
        </CheckInfo>
        <CheckInfo title={'URL 공유 시'}>
          <div>test</div>
        </CheckInfo>
      </section>
    </div>
  );
};

export default MakeSamplePage;
